import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // No BrowserRouter here

import HomePage from './components/Homepage';
import AdminDashboard from './components/Admin';
import ProtectedRoute from './components/Protectedroute'; // Ensure the name is consistent
import Doctor from './components/Doctor';
import User from './components/User';
import Login from './components/Login';
import Nav from './components/Nav';

function App() {
  const [user, setUser] = useState(null);

  // We are not using localStorage, so let's assume the user logs in only during the session
  // and manage the state directly.
  useEffect(() => {
    // You can load user from some API or state if you decide to add a backend.
  }, []); 

  // Protected Route Component
  const ProtectedRouteComponent = ({ role, children }) => {
    if (!user || user.role !== role) {
      return <Navigate to="/login" />; // Redirect to login if the user is not authenticated or does not have the correct role
    }
    return children;
  };

  return (
    <>
      {/* Navbar with dynamic links based on user role */}
      <Nav user={user} setUser={setUser} />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Protected Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRouteComponent role="admin">
              <AdminDashboard />
            </ProtectedRouteComponent>
          } 
        />
        <Route path="/doctor" element={<Doctor />} />
        <Route 
          path="/user" 
          element={
            <ProtectedRoute role="user">
              <User />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
