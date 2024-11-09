import React from 'react';
import { Navigate } from 'react-router-dom';

const Protectedroute = ({ children, role }) => {
  // Assume you have a function or context to get the current user and their role
  const currentUser = getCurrentUser(); // Replace this with actual user fetching logic

  if (!currentUser || currentUser.role !== role) {
    // Redirect to a different page (e.g., login or error page)
    return <Navigate to="/login" />;
  }

  return children; // Render the child components if the user is authorized
};

export default Protectedroute;
