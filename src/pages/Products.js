import React from 'react';
import { Navigate } from 'react-router-dom';

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

// Componente de Produtos
const Products = () => {
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Seu código aqui para renderizar o componente quando o usuário está autenticado
  return (
    <div>
      {/* Seu código aqui */}
      TESTE DE PRODUTOS - USUÁRIO AUTENTICADO
      
    </div>
  );
};

export default Products;
