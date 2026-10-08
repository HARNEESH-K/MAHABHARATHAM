const dbConfig = require('../config/db');
const { JsonModels } = require('../services/storageService');

const MongooseModels = {
  User: require('./User'),
  Parva: require('./Parva'),
  Question: require('./Question'),
  QuizAttempt: require('./QuizAttempt'),
  Achievement: require('./Achievement'),
  Video: require('./Video')
};

// Picks MongoDB (when connected) or the JSON engine on EVERY call,
// so models keep working even though the DB connects after files load.
const lazy = (name) =>
  new Proxy(function () {}, {
    get(_, prop) {
      const target = dbConfig.getStatus() ? MongooseModels[name] : JsonModels[name];
      const val = target[prop];
      return typeof val === 'function' ? val.bind(target) : val;
    }
  });

module.exports = Object.fromEntries(
  Object.keys(MongooseModels).map((name) => [name, lazy(name)])
);
