import React from 'react'

const Profileupadte = () => {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:8000/profile', { name, email, password });
      alert('Profile updated successfully!');
      // Optionally clear fields or perform other actions after success
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Profile update failed. Please try again.');
    }
  };
  return (
    <div>
        <h2>Update Profile</h2>
        <input
         type="text" 
         placeholder="User ID"
          value={userId} onChange={(e) => setUserId(e.target.value)}
           required
            />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};


export default Profileupadte