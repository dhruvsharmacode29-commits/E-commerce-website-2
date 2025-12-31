import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem('admin-token');
  
  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
}

export default ProtectedRoute