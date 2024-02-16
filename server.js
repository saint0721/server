const express = require('express')
const post = require('./router/routs')
const app = express()
const PORT = 8080

app.use('/post_page', post)

app.listen(PORT, () => {
  console.log(`https:${PORT} 에서 서버 실행중`)
})
