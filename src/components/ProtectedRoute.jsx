import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('user');
    return isAuthenticated ? element : <Navigate to="/Login" />;
};

export default ProtectedRoute;
