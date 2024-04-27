import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Abertura from './pages/Abertura';
import Cadastro from './pages/Cadastro';
import Casa from './pages/Casa';

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
    <Router>
      <div>
        {/* Navegação */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            {isLoggedIn && <li><button onClick={handleLogout}>Logout</button></li>}
          </ul>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
          <Route path="/cadastrar" element={<Cadastro />} />

          {/* Rota protegida */}
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/abertura" element={<PrivateRoute element={<Abertura />} />} />
          <Route path="/casa" element={<PrivateRoute element={<Casa />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


