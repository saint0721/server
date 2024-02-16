const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

// MongoDB 연결
let connectDB = require('./db.js')
const { ObjectId } = require('mongodb')
let db 
connectDB.then((client) => {
  console.log('DB 연결 성공')
  db = client.db('forum')
}).catch((err) => {
  console.error(err)
})

// 라우터 설정
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended : true }))

router.get('/', async (req, res) => {
  try {
    res.render('list.ejs')
    await db.collection('post').find().toArray()
  } catch(err) {
    console.error(err)
  }
})

module.exports = router