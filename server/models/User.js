const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  role: { type: Number, enum: [0, 1], required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);