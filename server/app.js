const express = require('express')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/apiRoutes')
require('dotenv').config()

mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connect has started..`))
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', apiRoutes)
module.exports = app
