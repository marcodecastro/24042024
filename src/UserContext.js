import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (loginData) => {
    // Faça a lógica de login aqui...

    // Após o login bem-sucedido, defina o usuário
    setUser(loginData);
    localStorage.setItem('token', 'seu_token_aqui');
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
