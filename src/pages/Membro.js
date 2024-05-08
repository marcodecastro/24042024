import React, { useState } from 'react';
import moment from 'moment'; 
import '../static/Membro.css';

const Membro = () => {
  const [memberName, setMemberName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [memberId, setMemberId] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          formType: 'memberForm', 
          formData: { 
            memberName, 
            birthDate, 
            memberId, 
            memberEmail, 
            celular,
            cim: memberId, 
          },
        }),
      });
  
      if (response.ok && response.headers.get('Content-Type').includes('json')) {
        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
        // Limpar os campos do formulário
        setMemberName('');
        setBirthDate(null);
        setMemberId('');
        setMemberEmail('');
        setCelular(''); 
      
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
      <h2>Dados Pessoais</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Nome do Membro</label>
            <input
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Data de Nascimento</label>
            <input
              type="date"
              value={moment(birthDate).format('YYYY-MM-DD')}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>ID do Membro</label>
            <input
              type="text"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Email do Membro</label>
            <input
              type="text"
              value={memberEmail}
              onChange={(e) => setMemberEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Celular</label>
            <input
              type="text"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
  
export default Membro;
