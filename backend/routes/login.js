// routes/authRoutes.js or any other file where login route exists
// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/userData'); // Your User model
// const Doctor = require('../models/docterData'); // Your Doctor model
// const Admin = require('../models/adminData'); // Your Admin model
// const router = express.Router();

// // Login Route (POST)
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user is a User, Doctor, or Admin by email
//     let user = await User.findOne({ userEmail: email }) ||
//                await Doctor.findOne({ doctorEmail: email }) ||
//                await Admin.findOne({ adminEmail: email });

//     // If no user found, send an error response
//     if (!user) {
//       return res.status(404).json({ error: 'User not found!' });
//     }

//     // Check if the password matches (assuming you are hashing the passwords with bcrypt)
//     const isPasswordMatch = await bcrypt.compare(password, user.userPassword || user.doctorPassword || user.adminPassword);
//     if (!isPasswordMatch) {
//       return res.status(401).json({ error: 'Invalid credentials!' });
//     }

//     // If login is successful, send the user role back to the frontend
//     return res.status(200).json({ message: 'Login successful', role: user.role });

//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
