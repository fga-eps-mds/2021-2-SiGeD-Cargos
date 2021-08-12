const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: [true],
  },
  description: {
    type: String,
    require: [true],
  },
  userType:{
    type: String,
    enum: ['c','u'],
    require: [true],
    max: [1, "O numero máximo é 1 caracter"]
  },
  createdAt: {
    type: Date,
    require: [true],
  },
  updatedAt: {
    type: Date,
    require: [true],
  },
});

module.exports = mongoose.model('Sector', roleSchema);
