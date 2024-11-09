import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../axiosinterceptors';

const UserProfile = () => {
  // State variables to store user data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error messages
  const [success, setSuccess] = useState(false); // To show success message after profile update

  // Function to fetch user data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // API request to get user data (replace with actual endpoint)
        const response = await axiosInstance.get('http://localhost:8000/user/user');

        const { name, email, bio } = response.data;  // Assume the response contains these fields
        setName(name);
        setEmail(email);
        setBio(bio);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the updated profile data
    const updatedProfile = { name, email, bio };

    try {
      // Send a PUT request to update the user profile (replace with actual API endpoint)
      const response = await axiosInstance.put('http://localhost:8000/user/user/profile/:userId', updatedProfile);

      // Show success message after successful update
      setSuccess(true);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Failed to update profile. Please try again.');
      setSuccess(false); // Reset success state in case of error
    }
  };

  // Render loading, success, error states
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
      <h2>User Profile</h2>
      {error && <div className="error">{error}</div>}  {/* Display error message */}
      {success && <div className="success">Profile updated successfully!</div>}  {/* Display success message */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            disabled // Disabling email field, since it's assumed that email can't be updated
          />
        </div>

        <div>
          <label htmlFor="bio">About You:</label>
          <textarea 
            id="bio" 
            name="bio" 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
          />
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
