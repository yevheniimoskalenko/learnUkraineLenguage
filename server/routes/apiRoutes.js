const { Router } = require('express')
const jwt = require('express-jwt')
require('dotenv').config()
const auth = require('../controller/auth.controller.js')

const router = Router()
router.post('/auth', auth)
router.get('/user', jwt({ secret: process.env.SECRET }), (req, res, next) =>
  res.json({ user: req.user })
)
module.exports = router
