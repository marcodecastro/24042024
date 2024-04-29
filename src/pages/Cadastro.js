import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useForm } from 'react-hook-form';
import mail from "../components/images/mail.png";
import lock from "../components/images/lock.png";
import profile from "../components/images/icone.jpg";

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({})
    const [error, setError] = useState(null);
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

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

        // Redireciona para a página de login
        navigate('/login');

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
        <form onSubmit={handleSubmit}>
          <div className='main'>
            <div className='sub-main'>
              <div>
                <h1>Cadastre-se</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {cadastroSucesso && <p style={{ color: 'green' }}>Usuário cadastrado com sucesso.</p>}
                <div>
                  <img src={profile} alt="emial" className='email' />
                  <input type="text" placeholder='Nome Completo' className='fill' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mail-id'>
                  <img src={mail} alt="emial" className='email' />
                  <input type="email" placeholder='Digite seu email' className='fill' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mail-id'>
                  <img src={lock} alt="emial" className='email' />
                  <input type="password" placeholder='Digite a Senha' className='fill' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='mail-id'>
                  <img src={lock} alt="emial" className='email' />
                  <input type="password" placeholder='Confirme a Senha' className='fill' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
               
                <div className='login-btn'>
                  <button type="submit">{isLoading ? 'Cadastrando...' : 'Cadastrar'}</button> 
                </div>
                <div className='reg-link'>
                  <p>Se já tem uma conta</p><Link className='link' to='/Login'><li>Faça Login !!!</li></Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }

export default Cadastro;






