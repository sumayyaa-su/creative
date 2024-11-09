
const express = require('express');
const Doctor = require('../models/docterData'); // Your model file
const router = express.Router();

// Get all doctors
router.get('/doctor', async (req, res) => {
    try {
        const doctors = await Doctor.find(); // Fetch all doctors
        res.json(doctors);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Create a doctor
router.post('/doctor', async (req, res) => {
    const { doctorName, doctorEmail, specialty, yearsOfExperience } = req.body;
    try {
        const newDoctor = new Doctor({ doctorName, doctorEmail, specialty, yearsOfExperience });
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update doctor profile
router.put('/doctor/:doctorId', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.doctorId, req.body, { new: true });
        if (!updatedDoctor) return res.status(404).send('Doctor not found');
        res.json(updatedDoctor);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete doctor
router.delete('/doctor/:doctorId', async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.doctorId);
        if (!deletedDoctor) return res.status(404).send('Doctor not found');
        res.json(deletedDoctor);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
