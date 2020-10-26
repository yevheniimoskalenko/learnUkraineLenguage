const { Schema, model } = require('mongoose');

const catalog = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  url_img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
module.exports = model('catalog', catalog);
