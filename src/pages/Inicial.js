import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Inicial = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        console.log("Verificando autenticação...");
        const token = localStorage.getItem('token');
        console.log('Token armazenado:', token); // Log do token armazenado
        setIsAuthenticated(!!token);
        console.log("Usuário autenticado:", isAuthenticated);
    }, []);

    // Se isAuthenticated for null, significa que ainda estamos verificando o token
    if (isAuthenticated === null) {
        return <div>Verificando autenticação...</div>;
    }

    // Se o usuário não estiver autenticado, redirecionar para a página de login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Se o usuário estiver autenticado, renderize o componente Inicial
    console.log("Usuário autenticado, renderizando o componente Inicial.");
    return (
        <div>
            {/* Seu código aqui */}
            TESTE DE INICIAL - USUÁRIO AUTENTICADO
        </div>
    );
}

export default Inicial;
