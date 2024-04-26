import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        let formErrors = {};
        if (!name) formErrors.name = "Nome é obrigatório";
        if (!email) formErrors.email = "Email é obrigatório";
        if (!password) formErrors.password = "Senha é obrigatória";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (!validateForm()) return;
        const data = {
            name,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:5000/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                
                }),
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || 'Algo deu errado');
            }

        // Limpa qualquer erro anterior em caso de sucesso
        setError(null);

        // Atualiza o estado apenas se a resposta for bem-sucedida
        setCadastroSucesso(true);

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPassword('');
    } catch (error) {
        setError(`Erro no cliente: ${error.message}`);
        console.error('Erro no cliente:', error);

        if (error.response) {
            // O servidor respondeu com um status de erro. Exiba a mensagem do servidor.
            setError(`Erro no servidor: ${error.response.message}`);
          } else {
            // Erro desconhecido
            setError(`Erro desconhecido: ${error.message}`);
          }
        
        } finally {
          setIsLoading(false);
        }
      };

  return (
    <div>
        <h1>Cadastro</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {cadastroSucesso && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>}

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Carregando...' : 'Cadastrar'}
            </button>
        </form>
        <div>
            <p>Já tem uma conta? <a href="/login">Faça login</a></p>
        </div>
    </div>
  )
}

export default Cadastro;






