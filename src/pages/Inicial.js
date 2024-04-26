import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Função para verificar se o usuário está autenticado
const checkIfUserIsAuthenticated = () => {
     // Recupera o token de autenticação do localStorage
     const userAuthToken = localStorage.getItem('token');

    // Verifica se o token de autenticação existe e não está vazio
    return !!userAuthToken;
}

// Componente de Inicial
const Inicial = () => {
    useEffect(() => {
    console.log("Verificando autenticação...");
    const isAuthenticated = checkIfUserIsAuthenticated();
    console.log("Usuário autenticado:", isAuthenticated);
  }, []);

    const isAuthenticated = checkIfUserIsAuthenticated();

    if (!isAuthenticated) {
        console.log("Usuário não autenticado, redirecionando para a página de login.");  
        return <Navigate to="/login" replace />;
    }

    console.log("Usuário autenticado, renderizando o componente Inicial.");
    // Seu código aqui para renderizar o componente quando o usuário está autenticado
    return (
        <div>
            {/* Seu código aqui */}
            TESTE DE INICIAL - USUÁRIO AUTENTICADO

        </div>
    );
}


export default Inicial;