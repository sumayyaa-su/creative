// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../axiosinterceptors';  // Make sure this is properly set up
// import { Button } from 'react-bootstrap';

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState(null); // To handle and display errors
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch users and doctors data from the backend or any API
//     const fetchData = async () => {
//       try {
//         const [usersResponse, doctorsResponse] = await Promise.all([
//           axiosInstance.get('http://localhost:8000/user'),   // Corrected URL for user data
//           axiosInstance.get('http://localhost:8000/doctor'), // Corrected URL for doctor data
//         ]);

//         setUsers(usersResponse.data);    // Set the response data for users
//         setDoctors(doctorsResponse.data); // Set the response data for doctors
//       } catch (error) {
//         console.error('There was an error fetching the data!', error);
//         setError('Failed to load users or doctors data. Please try again later.');
//       }
//     };

//     fetchData();
//   }, []);

//   // Navigate to a profile or specific user/doctor details
//   const handleProfileRedirect = (id, role) => {
//     if (role === 'doctor') {
//       navigate(`/doctor/${id}`);  // Corrected navigation for doctor profile
//     } else {
//       navigate(`/user/${id}`);    // Corrected navigation for user profile
//     }
//   };

//   // Optional: Add a delete function for users and doctors
//   const handleDelete = async (id, role) => {
//     try {
//       const response = await axiosInstance.delete(`http://localhost:8000/${role}/${id}`);  // Corrected delete URL
//       if (response.status === 200) {
//         // Remove deleted item from the list
//         if (role === 'user') {
//           setUsers(users.filter(user => user.id !== id));  // Remove user from list
//         } else if (role === 'doctor') {
//           setDoctors(doctors.filter(doctor => doctor.id !== id));  // Remove doctor from list
//         }
//       }
//     } catch (error) {
//       console.error('Failed to delete', error);
//       setError('Failed to delete item. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>

//       {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message if any */}

//       <h2>Doctors</h2>
//       <ul>
//         {doctors.length === 0 ? (
//           <p>No doctors found.</p> // Fallback message if no doctors are available
//         ) : (
//           doctors.map((doctor) => (
//             <li key={doctor.doctorId}>
//               <span>{doctor.doctorName}</span> 
//               <span>{doctor.doctorSpeciality}</span> 
//               <span>{doctor.doctorExperience}</span> 
//               <span>{doctor.doctorBio}</span> 
//               <Button variant="primary" onClick={() => handleProfileRedirect(doctor.doctorId, 'doctor')}>
//                 View Profile
//               </Button>
//               <Button variant="danger" onClick={() => handleDelete(doctor.doctorId, 'doctor')}>
//                 Delete
//               </Button>
//             </li>
//           ))
//         )}
//       </ul>

//       <h2>Users</h2>
//       <ul>
//         {users.length === 0 ? (
//           <p>No users found.</p> // Fallback message if no users are available
//         ) : (
//           users.map((user) => (
//             <li key={user.userId}>
//               <span>{user.userName}</span>
//               <span>{user.userEmail}</span> 
//               <span>{user.userBio}</span>
//               <Button variant="primary" onClick={() => handleProfileRedirect(user.userId, 'user')}>
//                 View Profile
//               </Button>
//               <Button variant="danger" onClick={() => handleDelete(user.userId, 'user')}>
//                 Delete
//               </Button>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

