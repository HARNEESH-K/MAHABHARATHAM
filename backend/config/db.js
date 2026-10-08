const mongoose = require('mongoose');

let isMongooseConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mahabharata_quest';
  if (!process.env.MONGODB_URI && process.env.NODE_ENV === 'production') {
    console.log('[DB] No MONGODB_URI set - using built-in JSON engine (data resets on redeploy; set MONGODB_URI for permanent storage).');
    return null;
  }
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000 // Fast 3s timeout for fallback if MongoDB is not running locally
    });
    isMongooseConnected = true;
    console.log(`[DB] MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    isMongooseConnected = false;
    console.warn(`[DB] Local MongoDB connection note: ${error.message}`);
    console.log(`[DB] Built-in Persistent JSON Engine active at backend/data/mahabharata.db.json (Fully functional persistence, 0 setup required).`);
    return null;
  }
};

const getStatus = () => isMongooseConnected;

module.exports = {
  connectDB,
  getStatus
};
