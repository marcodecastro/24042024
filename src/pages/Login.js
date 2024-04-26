import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [error, setError] = useState(null); // Adicione esta linha
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {    
    e.preventDefault(); 
    try {
      // Enviar os dados ao backend
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro desconhecido');
      }

      // Armazenar o token no localStorage
      localStorage.setItem('token', responseData.token);

      // Atualiza a página
      window.location.reload();
    
      // Redireciona para a página inicial
      navigate('/Inicial');
    } catch (error) {
      setError('Erro no cliente: ' + error.message);
      console.error('Erro no cliente:', error);
    }
  };






  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>} 
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={form.senha} onChange={handleChange} required autoComplete="current-password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;


