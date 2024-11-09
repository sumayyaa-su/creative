const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorImage: {
    type: String,
    required: false
  },
  doctorId: {
    type: String,
    required: true,
    unique: true
  },
  doctorName: {
    type: String,
    required: true
  },
  doctorEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  specialty: {
    type: String,
    required: true
  },
  doctorBio: {
    type: String,
    required: false,
    maxLength: 500
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'doctor', 'user'], // Role can only be one of these
    default: 'doctor' // Default role if not provided
  }
  
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
