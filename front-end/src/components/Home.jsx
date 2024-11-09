// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../axiosinterceptors';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
// import { Grid2 } from '@mui/material';
// // import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2 is imported from this path
// import Nav from './Nav'; 

// const Home = () => {
//   const [users, setUsers] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axiosInstance.get('http://localhost:8000/user/user');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axiosInstance.delete(`http://localhost:8000/users/delete/${id}`);
//       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
//       alert('User deleted successfully');
//     } catch (err) {
//       console.error("Error deleting user:", err);
//     }
//   };

//   const handleUpdate = (user) => {
//     navigate('/add', { state: { user } });
//   };

//   return (
//     <div>
//       <h1>Welcome to the Feelings Project</h1>
//       <p>Your feelings matter! Navigate through the app to explore.</p>
//       <Nav />
      {/* <Grid2 container spacing={8} sx={{ padding: 4 }}>
        {users.map((user) => (
          <Grid2 item xs={12} sm={6} md={4} key={user._id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                sx={{ height: 150 }}
                image={user.userImage}
                title={user.userName}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                  {user.userName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Email: {user.userEmail}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Bio: {user.userBio}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Password: {user.userPassword}
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: '#F95454' }} onClick={() => handleDelete(user._id)}>DELETE</Button>
                <Button variant="contained" onClick={() => handleUpdate(user)}>EDIT</Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2> */}
//     </div>
//   );
// };

// export default Home;
