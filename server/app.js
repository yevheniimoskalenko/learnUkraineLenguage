const express = require('express')
const mongoose = require('mongoose')
// const authLogin = require('./routes/auth')

mongoose
  .connect(
    'mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log(`connect has started..`))
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

// app.use('/api', authLogin)
module.exports = app
