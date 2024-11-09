import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../axiosinterceptors';

const Doctor = () => {
  const [doctorImage, setDoctorImage] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [doctorBio, setDoctorBio] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCreateProfile = async () => {
    setLoading(true);
    setError(''); // Reset previous errors
    setSuccessMessage(''); // Reset success message

    // Prepare the data object to be sent in the request
    const doctorData = {
      doctorImage,
      doctorId,
      doctorName,
      doctorEmail,
      specialty,
      doctorBio,
      yearsOfExperience,
    };

    try {
      // Sending POST request to backend
      const response = await axiosInstance.post('http://localhost:8000/doctor', doctorData);

      // If the profile is successfully created, show a success message
      setSuccessMessage('Profile created successfully!');
      setDoctorImage('');
      setDoctorId('');
      setDoctorName('');
      setDoctorEmail('');
      setSpecialty('');
      setDoctorBio('');
      setYearsOfExperience('');
    } catch (error) {
      setError('Error creating profile. Please try again.');
      console.error('Error creating profile:', error);
    } finally {
      setLoading(false); // Turn off loading state after request is done
    }
  };

  return (
    <div>
      <h2>Doctor Profile</h2>

      {/* Display success or error messages */}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Input fields for doctor profile */}
      <input
        type="text"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Doctor Email"
        value={doctorEmail}
        onChange={(e) => setDoctorEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <textarea
        placeholder="Doctor Bio"
        value={doctorBio}
        onChange={(e) => setDoctorBio(e.target.value)}
      />
      <input
        type="number"
        placeholder="Years of Experience"
        value={yearsOfExperience}
        onChange={(e) => setYearsOfExperience(e.target.value)}
      />
      <input
        type="text"
        placeholder="Doctor Image URL (Optional)"
        value={doctorImage}
        onChange={(e) => setDoctorImage(e.target.value)}
      />

      <button onClick={handleCreateProfile} disabled={loading}>
        {loading ? 'Creating Profile...' : 'Create Profile'}
      </button>
    </div>
  );
};

export default Doctor;
