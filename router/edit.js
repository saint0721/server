const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

// MongoDB 연결
let connectDB = require('./db.js')
const { ObjectId } = require('mongodb')
let db 
connectDB.then((client) => {
  db = client.db('forum')
}).catch((err) => {
  console.error(err)
})

// 라우터 설정
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended : true }))

router.get('/:id', async (req, res) => {
  try {
    let result = await db.collection('post').findOne({ _id : new ObjectId(req.params.id) })
    res.render('edit.ejs', { list : result })
  } catch(err) {
    console.error(err)
  }
})

router.post('/:id', async (req, res) => {
  try {
    await db.collection('post').updateOne({ _id : new ObjectId(req.params.id) }, { $set : { title : req.body.title, content : req.body.content } })
  res.redirect('/list')
  } catch(err) {
    console.log(err)
  }
})

module.exports = router