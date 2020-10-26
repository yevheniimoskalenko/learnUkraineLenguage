const { Schema, model } = require('mongoose');

const payResult = new Schema({
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  amount: {
    type: Number,
    required: true,
  },
  tikets: {
    type: Number,
    required: true,
  },
});
module.exports = model('pay', payResult);
