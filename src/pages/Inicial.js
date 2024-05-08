import React from 'react';
import { Link } from 'react-router-dom';


import membro from '../components/images/membro.png';
import casamento from '../components/images/casamento.ico';
import filhos from '../components/images/filhos.ico';
import esposa from '../components/images/esposa.ico';
import simbolicos from '../components/images/simbolicos.png';
import filosoficos from '../components/images/filosoficos.ico';
import adicionais from '../components/images/adicionais.ico';
import instalacao from '../components/images/instalacao.png';
import reassuncao from '../components/images/reassuncao.png';
import condecoracao from '../components/images/condecoracao.png';
import apostolado from '../components/images/apostolado.ico';
import '../static/Inicial.css';

function Inicial() {
  return (
    <div>
        <div className="pagina">
        <h1>Esta é a sua página de forms.</h1>
    </div>
        <div className="container">
            <div className="card">
                <div className="icon">
                    <img src={membro} alt="Membro" className="membro" width="60" height="60" />
                </div>
                <h2>Nome do Membro</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/membro">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={esposa} alt="Esposa" className="esposa" width="60" height="60" />
                </div>
                <h2>Nome da Esposa</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/esposa">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={filhos} alt="Filhos" className="filhos" width="60" height="60" />
                </div>
                <h2>Nome dos Filhos</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/filhos">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>
            <div className="card">
                <div className="icon">
                    <img src={casamento} alt="Casamento" className="casamento" width="60" height="60" />
                </div>
                <h2>Aniversário de Casamento</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/casamento">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={simbolicos} alt="Simbolicos" className="simbolicos" width="60" height="60" />
                </div>
                <h2>Graus Simbólicos</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/simbolico">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={condecoracao} alt="Condecoracao" className="condecoracao" width="60" height="60" />
                </div>
                <h2>Condecorações</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/condecoracao">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={filosoficos} alt="Filosoficos" className="filosoficos" width="60" height="60" />
                </div>
                <h2>Graus Filosóficos</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/filosoficos">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={adicionais} alt="Adicionais" className="adicionais" width="60" height="60" />
                </div>
                <h2>Graus Adicionais</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/adicionais">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={instalacao} alt="Instalacao" className="instalacao" width="60" height="60" />
                </div>
                <h2>Instalação</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/instalacao">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>
            <div className="card">
                <div className="icon">
                    <img src={reassuncao} alt="Reassuncao" className="reassuncao" width="60" height="60" />
                </div>
                <h2>Reassunção</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/reassuncao">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={apostolado} alt="Apostolado" className="apostolado" width="60" height="60" />
                </div>
                <h2>Apostolado</h2>
                <p>Preencha o formulário com os dados do Membro aqui.</p>
                <Link to="/apostolado">
                    <button className="btn">Preencher Formulário</button>
                </Link>
            </div>

        </div>
    </div>
);
}

  

export default Inicial;

