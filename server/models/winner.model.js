const { Schema, model } = require('mongoose');

const winner = new Schema({
  id_catalog: {
    type: Schema.Types.ObjectId,
    ref: 'catalog',
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  numberWinner: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model('winner', winner);
