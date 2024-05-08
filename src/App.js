import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Abertura from './pages/Abertura';
import Cadastro from './pages/Cadastro';
import Inicial from './pages/Inicial';
import Membro from './pages/Membro';


import { UserProvider } from './UserContext.js';

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

// Componente de rota protegida
const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  // Função para lidar com o login do usuário
  const handleLogin = () => {
    localStorage.setItem('token', 'seu_token_aqui');
    setIsLoggedIn(true);
  };

  // Função para lidar com o logout do usuário
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <UserProvider>
      <Router>
        <div>
          {/* Navegação */}
          {/* Rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
            <Route path="/cadastro" element={<Cadastro />} />
            {/* Rota protegida */}
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/abertura" element={<PrivateRoute element={<Abertura />} />} />
            <Route path="/inicial" element={<PrivateRoute element={<Inicial />} />} />
            <Route path="/membro" element={<PrivateRoute element={<Membro />} />} />
            
            
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;