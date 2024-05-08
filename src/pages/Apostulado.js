import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import moment from 'moment'; // Corrigido a importação do Moment.js
import { format } from 'date-fns';
import '../static/Apostulado.css';


const ParentComponent = () => {
  const [memberId, setMemberId] = useState('');


  return (
    <div>
      {/* Renderizando o componente Apostulado e passando memberId e setMemberId como props */}
      <Apostulado memberId={memberId} setMemberId={setMemberId} />
    </div>
  );
};

const Apostulado = ({ memberId, setMemberId }) => {
  const [apostulate, setApostulate] = useState([{ degree: '', date: new Date(), descricao: '' }]);

  const handleDegreeChange = (index, field, value) => {
    const updatedDegrees = [...apostulate];
    updatedDegrees[index][field] = value;
    setApostulate(updatedDegrees);
  };

  const handleAddDegree = () => {
    setApostulate([...apostulate, { degree: '', date: new Date(), descricao: '' }]);
  };

  const handleRemoveDegree = (index) => {
    if (apostulate.length > 1) {
      const updatedDegrees = apostulate.filter((_, i) => i !== index);
      setApostulate(updatedDegrees);
    }
  };

  const handleSubmit = async () => {
    try {
      // Filtrar os graus válidos antes de enviar a requisição
      const validDegrees = apostulate.filter(degree => degree.degree && degree.degree.trim() !== '');
      console.log('Graus válidos:', validDegrees);
  
      // Verificar se há pelo menos um grau definido
      if (validDegrees.length === 0) {
        throw new Error('Por favor, selecione pelo menos um grau.');
      }
  
      // Formatar os dados para enviar ao servidor
      const formattedDegrees = validDegrees.map(degree => ({
        grau: degree.degree,
        data: format(degree.date, 'dd/MM/yyyy'),
        descricao: degree.descricao
      }));
  
      const memberIdNumber = parseInt(memberId);
  
      const response = await fetch('http://localhost:5005/api/apostulado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedDegrees.map(degree => ({ ...degree, memberId: memberIdNumber })))
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar dados para o servidor');
      }
  
      // Limpar o formulário após o envio bem-sucedido
      setApostulate([{ degree: '', date: new Date(), descricao: '' }]);
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error.message);
      alert('Erro ao enviar dados para o servidor');
    }
  };

  return (
    <div className="form-container">
      <Typography variant="h2">Apostolado</Typography>
  
      <div className="field-container">
        <TextField
          fullWidth
          label="ID do Membro"
          variant="outlined"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
      </div>
  
      {apostulate.map((degree, index) => (
        <div key={`apotulate-${index}`} className="degree-container">
          <div className="field-container">
            <FormControl fullWidth>
              <InputLabel>Grau</InputLabel>
              <Select
                value={degree.degree}
                onChange={(e) => handleDegreeChange(index, 'degree', e.target.value)}
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="Recruta">Recruta</MenuItem>
                <MenuItem value="Cavaleiro de Santa Cruz">Cavaleiro de Santa Cruz</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="field-container"> 
            <TextField 
              fullWidth
              label="Data do Grau"
              variant="outlined"
              type="date"
              value={moment(degree.date).format('YYYY-MM-DD')}
              onChange={(e) => handleDegreeChange(index, 'date', e.target.value)}
              placeholder="Selecione uma data"
            />
          </div>
          <div className="field-container">
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
              value={degree.descricao}
              onChange={(e) => handleDegreeChange(index, 'descricao', e.target.value)}
            />
          </div>
          
          {index !== 0 && (
            <Button className="remove-button" onClick={() => handleRemoveDegree(index)}>Remover</Button>
          )}
        </div>
      ))}
  
      <div className="button-container">
        <Button className="add-degree-button" onClick={handleAddDegree}>Adicionar Grau</Button>
      </div>
      <div className="button-container">
        <Button className="submit-button" onClick={handleSubmit}>Enviar</Button>
      </div>
    </div>
  );
  
 
};

export default ParentComponent;