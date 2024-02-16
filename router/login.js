const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended : true }))

router.get('/', (req, res) => {
  try {
    res.render('login.ejs')
  } catch(err) {
    console.error(err)
  }
})

router.post('/', (req, res) => {
  let id = req.body.id
  let pwd = req.body.pwd
  let title = 'Post page'
  console.log("id  : ", id)
  console.log("pwd : ", pwd)
  res.send(
    `<h1>${title}</h1>
    <p>당신의 아이디는 ${id}</p>
    <p>당신의 비밀번호는 ${pwd}</p>`
  )
})

module.exports = router