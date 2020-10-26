const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('user', UserSchema)
