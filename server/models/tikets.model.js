const { Schema, model } = require('mongoose');

const tikets = new Schema({
  id_catalog: {
    type: Schema.Types.ObjectId,
    ref: 'catalog',
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  number_tikets: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isBuy: {
    type: Boolean,
    default: false,
  },
});
module.exports = model('tikets', tikets);
