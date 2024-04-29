import React from 'react';
import { Link } from 'react-router-dom';
import redusida from '../components/images/redusida.jpg';
import './Home.css';

const Home = ({ isLoggedIn }) => {
  return (
    <div className="logged-in-home-page">
      <header className="home-header">
        <h1>Bem-vindo{isLoggedIn ? ', Usuário' : ''}!</h1>
        <p>Comemorações Maçônicas para Chancelaria.</p>
      </header>

      <section className="home-content">
        <p>As comemorações maçônicas são eventos especiais que marcam momentos importantes na história do Membro na Maçonaria. Essas comemorações são uma oportunidade para os maçons se reunirem, celebrarem suas conquistas e reafirmarem seu compromisso com os princípios e valores maçônicos.</p>

        <img src={redusida} alt="Comemorações Maçônicas" className="home-image" />

        <div className="home-links">
          {!isLoggedIn && <Link to="/login" className="home-link">Login</Link>}
          {!isLoggedIn && <Link to="/cadastro" className="home-link">Cadastro</Link>}
        </div>
      </section>
    </div>
  );
};

export default Home;
