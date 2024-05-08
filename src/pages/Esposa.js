import React, { useState } from 'react';
import { Button, Typography, Grid, TextField } from '@mui/material';
import moment from 'moment';
import '../static/Esposa.css';

const Esposa = () => {

  const [spouseName, setSpouseName] = useState('');
  const [spouseBirthDate, setSpouseBirthDate] = useState(new Date());
  const [memberId, setMemberId] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!spouseName || !memberId) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          formType: 'spouseForm', 
          formData: { 
            spouseName, 
            spouseBirthDate, 
            memberId 
          }
        })
      });

      if (response.ok && response.headers.get('Content-Type').includes('json')) {
        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
        // Limpar o formulário após o envio bem-sucedido
        setSpouseName('');
        setSpouseBirthDate(new Date());
        setMemberId('');
      } else {
        setError('Erro inesperado na resposta.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setError('Erro ao enviar dados. Tente novamente mais tarde.');
    }
  };  

  return (
    <div>
      <Typography variant="h2">Nome da Esposa</Typography>
      <div className="campo-formulario">
      <div className="nome-esposa">
        <TextField
          fullWidth
          label="Nome da Esposa"
          variant="outlined"
          value={spouseName}
          onChange={(e) => setSpouseName(e.target.value)}
          placeholder="Digite o nome da esposa"
        />
        </div>
      </div>
      <div>
        
      <div className="campo-formulario">
      <div className="data-nascimento">
        <TextField 
          fullWidth
          label="Data de Nascimento"
          variant="outlined"
          type="date"
          selected={spouseBirthDate}
          onChange={(date) => setSpouseBirthDate(date)}
          //dateFormat="dd/MM/yyyy"
          value={moment(spouseBirthDate).format('dd/MM/yyyy')}

          placeholderText="Selecione uma data"
        />
      </div>
      </div>
      </div>
      <div>
      <div className="campo-formulario">
      <div className="id-membro">
        <TextField
          fullWidth
          label="ID do Membro"
          variant="outlined"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          placeholder="Digite o ID do membro"
        />
      </div>
      </div>
      </div>

      <Button onClick={handleSubmit} variant="contained" color="primary">
        Enviar
      </Button>
    </div>
  );
};

export default Esposa;