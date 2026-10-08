const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DB_FILE = path.join(__dirname, '..', 'data', 'mahabharata.db.json');

// Ensure data folder and file exist
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}

const defaultData = {
  users: [],
  parvas: [],
  questions: [],
  quizAttempts: [],
  achievements: [],
  videos: []
};

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf8');
      return { ...defaultData };
    }
    const content = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(content || '{}');
  } catch (err) {
    console.error('Error reading JSON DB:', err.message);
    return { ...defaultData };
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing JSON DB:', err.message);
  }
}

class QueryChain {
  constructor(items) {
    this._items = items ? [...items] : [];
  }

  sort(sortObj) {
    if (!sortObj) return this;
    const entries = Object.entries(sortObj);
    this._items.sort((a, b) => {
      for (const [key, order] of entries) {
        const valA = a[key];
        const valB = b[key];
        if (valA < valB) return order === -1 ? 1 : -1;
        if (valA > valB) return order === -1 ? -1 : 1;
      }
      return 0;
    });
    return this;
  }

  limit(num) {
    if (typeof num === 'number') {
      this._items = this._items.slice(0, num);
    }
    return this;
  }

  skip(num) {
    if (typeof num === 'number') {
      this._items = this._items.slice(num);
    }
    return this;
  }

  select(fields) {
    if (!fields) return this;
    const fieldArr = typeof fields === 'string' ? fields.split(' ').filter(Boolean) : fields;
    const isExclusion = fieldArr.some(f => f.startsWith('-'));
    this._items = this._items.map(item => {
      const copy = { ...item };
      if (isExclusion) {
        fieldArr.forEach(f => {
          if (f.startsWith('-')) delete copy[f.slice(1)];
        });
      } else {
        const picked = {};
        fieldArr.forEach(f => {
          if (copy[f] !== undefined) picked[f] = copy[f];
        });
        return picked;
      }
      return copy;
    });
    return this;
  }

  populate() {
    // simplified populate mock
    return this;
  }

  then(resolve, reject) {
    return Promise.resolve(this._items).then(resolve, reject);
  }

  catch(reject) {
    return Promise.resolve(this._items).catch(reject);
  }
}

function matchFilter(item, filter) {
  if (!filter || Object.keys(filter).length === 0) return true;
  for (const [key, value] of Object.entries(filter)) {
    if (key === '_id' || key === 'id') {
      const itemId = item._id || item.id;
      if (String(itemId) !== String(value)) return false;
      continue;
    }
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (value.$in && Array.isArray(value.$in)) {
        if (!value.$in.map(String).includes(String(item[key]))) return false;
      }
      if (value.$nin && Array.isArray(value.$nin)) {
        if (value.$nin.map(String).includes(String(item[key]))) return false;
      }
      if (value.$gte !== undefined && !(item[key] >= value.$gte)) return false;
      if (value.$lte !== undefined && !(item[key] <= value.$lte)) return false;
      if (value.$regex) {
        const reg = new RegExp(value.$regex, value.$options || '');
        if (!reg.test(item[key])) return false;
      }
    } else {
      if (item[key] !== value && String(item[key]) !== String(value)) {
        return false;
      }
    }
  }
  return true;
}

function createModel(collectionName) {
  return {
    async find(filter = {}) {
      const db = readDb();
      const list = (db[collectionName] || []).filter(item => matchFilter(item, filter));
      return new QueryChain(list);
    },

    async findOne(filter = {}) {
      const db = readDb();
      const list = db[collectionName] || [];
      const found = list.find(item => matchFilter(item, filter));
      return found ? { ...found } : null;
    },

    async findById(id) {
      return this.findOne({ _id: id });
    },

    async create(doc) {
      const db = readDb();
      if (!db[collectionName]) db[collectionName] = [];
      const newDoc = {
        _id: doc._id ? String(doc._id) : (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2)),
        ...doc,
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      db[collectionName].push(newDoc);
      writeDb(db);
      return { ...newDoc };
    },

    async insertMany(docs) {
      const db = readDb();
      if (!db[collectionName]) db[collectionName] = [];
      const inserted = docs.map(doc => ({
        _id: doc._id ? String(doc._id) : (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2)),
        ...doc,
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));
      db[collectionName].push(...inserted);
      writeDb(db);
      return inserted;
    },

    async findByIdAndUpdate(id, update, options = {}) {
      const db = readDb();
      const list = db[collectionName] || [];
      const index = list.findIndex(item => String(item._id || item.id) === String(id));
      if (index === -1) return null;

      const existing = list[index];
      let updatedData = { ...existing };

      if (update.$set) {
        Object.assign(updatedData, update.$set);
      } else {
        Object.assign(updatedData, update);
      }

      if (update.$inc) {
        for (const [key, val] of Object.entries(update.$inc)) {
          updatedData[key] = (Number(updatedData[key]) || 0) + Number(val);
        }
      }

      if (update.$push) {
        for (const [key, val] of Object.entries(update.$push)) {
          if (!Array.isArray(updatedData[key])) updatedData[key] = [];
          updatedData[key].push(val);
        }
      }

      if (update.$addToSet) {
        for (const [key, val] of Object.entries(update.$addToSet)) {
          if (!Array.isArray(updatedData[key])) updatedData[key] = [];
          if (!updatedData[key].includes(val)) {
            updatedData[key].push(val);
          }
        }
      }

      updatedData.updatedAt = new Date().toISOString();
      list[index] = updatedData;
      db[collectionName] = list;
      writeDb(db);
      return { ...updatedData };
    },

    async findByIdAndDelete(id) {
      const db = readDb();
      const list = db[collectionName] || [];
      const index = list.findIndex(item => String(item._id || item.id) === String(id));
      if (index === -1) return null;
      const [removed] = list.splice(index, 1);
      db[collectionName] = list;
      writeDb(db);
      return removed;
    },

    async countDocuments(filter = {}) {
      const db = readDb();
      const list = (db[collectionName] || []).filter(item => matchFilter(item, filter));
      return list.length;
    },

    async deleteMany(filter = {}) {
      const db = readDb();
      if (!filter || Object.keys(filter).length === 0) {
        const count = (db[collectionName] || []).length;
        db[collectionName] = [];
        writeDb(db);
        return { deletedCount: count };
      }
      const initial = (db[collectionName] || []).length;
      db[collectionName] = (db[collectionName] || []).filter(item => !matchFilter(item, filter));
      writeDb(db);
      return { deletedCount: initial - db[collectionName].length };
    }
  };
}

const JsonModels = {
  User: createModel('users'),
  Parva: createModel('parvas'),
  Question: createModel('questions'),
  QuizAttempt: createModel('quizAttempts'),
  Achievement: createModel('achievements'),
  Video: createModel('videos')
};

module.exports = {
  readDb,
  writeDb,
  JsonModels
};
