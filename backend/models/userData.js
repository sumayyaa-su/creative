const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userImage: {
    type: String,
    required: false
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  userBio: {
    type: String,
    required: false,
    maxLength: 500
  },
  userPassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'doctor', 'user'], // Role can only be one of these
    default: 'user' // Default role if not provided
  }

});

const User = mongoose.model('User', userSchema);
module.exports = User;
