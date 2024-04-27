import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

const PrivateRouteWrapper = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouteWrapper;
