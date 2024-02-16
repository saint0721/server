// db.js
const { MongoClient } = require('mongodb');

let db;

const connectDB = async (url) => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('DB 연결 성공');
    db = client.db('forum');
  } catch (err) {
    console.error('DB 연결 실패:', err);
  }
};

const getDB = () => {
  return db;
};

module.exports = { connectDB, getDB };
