import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Função para verificar se o usuário está autenticado
const checkIfUserIsAuthenticated = () => {
    // Este é um espaço reservado para o token de autenticação do usuário ou sessão
    const user_auth_token = null;

    // Verifique se o token de autenticação do usuário ou sessão existe
    if (user_auth_token) {
        return true;
    } else {
        return false;
    }
};

const PrivateRoute = (props) => {
  const isAuthenticated = checkIfUserIsAuthenticated(); // Use a função para verificar se o usuário está autenticado
  
  return (
    <Route {...props} element={isAuthenticated ? props.element : <Navigate to="/login" replace />} />
  );
};

export default PrivateRoute;

