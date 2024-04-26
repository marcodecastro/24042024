import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Cadastro from './pages/Cadastro.js';
import Login from './pages/Login.js';
import Inicial from './pages/Inicial.js';
import Teste from './pages/Teste.js';
import Products from './pages/Products.js';
import PrivateRoute from './utils/PrivateRoute.js';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inicial" element={<Inicial />} />
            <Route path="/products" element={<Products />} />
            <Route path="/teste" element={<Teste />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
