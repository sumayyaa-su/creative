// userRoutes.js
const express = require('express');
const User = require('../models/userData'); // Your model file
const router = express.Router();

// Get all users
router.get('/user', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Register a user
router.post('/user/register', async (req, res) => {
  const { userId, userName, userEmail, userPassword, userBio } = req.body;
    try {
        const newUser = new User({ userId,userName, userEmail, userPassword, userBio });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update user profile
router.put('/user/profile/:userId', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!updatedUser) return res.status(404).send('User not found');
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete user
router.delete('/user/:userId', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) return res.status(404).send('User not found');
        res.json(deletedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
