// .env 
require('dotenv').config()

// 익스프레스
const express = require('express')
const app = express()

// MongoDB 연결
let connectDB = require('./router/db.js')
let db
connectDB.then((client) => {
  db = client.db('forum')
  app.listen(process.env.PORT, () => {
    console.log('http://localhost:8080에서 서버 실행중')
  })
}).catch((err) => {
  console.error(err)
})

// 경로
const path = require('path')

// ejs 경로 설정
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// 라우터 설정
app.use('/login', require('./router/login'))
app.use('/list', require('./router/list'))
app.use('/write', require('./router/write'))
app.use('/detail', require('./router/detail'))
app.use('/edit', require('./router/edit'))

// css 경로 설정
app.use(express.static(__dirname + '/public/stylesheet'))