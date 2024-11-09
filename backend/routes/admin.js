const express = require('express');
const User =require('../models/userData');
const Doctor =require('../models/docterData');
const Admin = require('../models/adminData');
const router = express.Router();

//for users
router.get('/admin/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/admin/users/:userId', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/admin/users/:userId', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// for doctor
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put('/doctors/:doctorId', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.doctorId, req.body, { new: true });
        res.json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.delete('/doctors/:doctorId', async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.doctorId);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports = router;