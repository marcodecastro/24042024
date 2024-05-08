import React, { useState } from 'react';
import { Typography, TextField, Grid, Button } from '@mui/material';
import moment from 'moment';
import '../static/Esposa.css';

const Filho = () => {
  const [nomeFilho, setNomeFilho] = useState('');
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [descricao, setDescricao] = useState('');
  const [memberId, setMemberId] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nomeFilho || !memberId) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      console.log('Enviando dados do filho para o backend:', { nomeFilho, dataNascimento, descricao, memberId });
      const response = await fetch('http://localhost:5005/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'childForm',
          formData: {
            nomeFilho,
            dataNascimento,
            descricao,
            memberId,
          },
        }),
      });

      if (response.ok && response.headers.get('Content-Type').includes('json')) {
        const data = await response.json();
        console.log('Dados do filho enviados com sucesso:', data);
        // Limpar os campos do formulário
        setNomeFilho('');
        setDataNascimento(new Date());
        setDescricao('');
        setMemberId('');
      } else {
        setError('Erro inesperado na resposta.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados do filho:', error);
      setError('Erro ao enviar dados do filho. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <Typography variant="h2">Adicionar Filho</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <div className="campo-formulario">
          <div className="nome-membro">
            <TextField
              fullWidth
              label="Nome do Filho"
              variant="outlined"
              value={nomeFilho}
              onChange={(e) => setNomeFilho(e.target.value)}
            />
            </div>
            </div>
          </Grid>
          <Grid item xs={12}>
           <div className="campo-formulario">
           <div className="data-nascimento">
           <TextField
              fullWidth
              label="Data de Nascimento"
              variant="outlined"
              type="date"
              value={moment(dataNascimento).format('YYYY-MM-DD')} // Corrigido para dataNascimento
              onChange={(e) => setDataNascimento(e.target.value)} // Corrigido para setDataNascimento
          />
            </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="campo-formulario">
            <div className="descricao">
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            </div>
            </div>
          </Grid>
          <Grid item xs={12}>
          <div className="campo-formulario">
          <div className="id-membro">
            <TextField
              fullWidth
              label="ID do Membro"
              variant="outlined"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
            </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Filho;


