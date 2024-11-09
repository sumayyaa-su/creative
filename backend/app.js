const express=require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors=require('cors');

require('dotenv').config(); 

const PORT = process.env.PORT || 8000; 
app.use(morgan('dev')); 
app.use(cors());

require('./db/connection');


app.use(express.json());


const userRoutes = require('./routes/userRoutes');
const adminRoutes=require('./routes/admin');
const doctorRoutes=require('./routes/doctor')
app.use('/user', userRoutes);
app.use('/admin',adminRoutes);
app.use('/doctor',doctorRoutes);

const users = [
  { email: 'admin2233@gmail.com', password: '11223344', role: 'admin' },
  { email: 'doctor1234@gmail.com', password: '11223344', role: 'doctor' },
  { email: 'user1234@gmail.com', password: '11223344', role: 'user' },
];

app.post('/login', (req, res) => {
    const { adminEmail, adminPassword } = req.body;
    if (adminEmail === 'admin2233@gmail.com' && adminPassword === '11223344') {
      res.json({ message: 'Login successful',
      role: 'admin',
    })
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });

// Doctor model
// const Doctor = mongoose.model('doctor',doctorSchema);

// POST endpoint to create doctor profile
app.post('/doctor', async (req, res) => {
  const {
    doctorImage,
    doctorId,
    doctorName,
    doctorEmail,
    specialty,
    doctorBio,
    yearsOfExperience,
  } = req.body;

  // Validate required fields
  if (!doctorId || !doctorName || !doctorEmail || !specialty || !yearsOfExperience) {
    return res.status(400).json({ message: 'All required fields must be provided.' });
  }

  // Validate email format (already done by mongoose)
  if (!/\S+@\S+\.\S+/.test(doctorEmail)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  try {
    // Create a new doctor profile
    const newDoctor = new Doctor({
      doctorImage,
      doctorId,
      doctorName,
      doctorEmail,
      specialty,
      doctorBio,
      yearsOfExperience,
    });

    await newDoctor.save(); // Save doctor profile to the database

    // Return a success message
    res.status(201).json({ message: 'Doctor profile created successfully' });
  } catch (error) {
    console.error('Error creating doctor profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
