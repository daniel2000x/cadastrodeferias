import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';




const Defensores = () => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [comarca, setComarca] = useState('');
  const [vara, setVara] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode realizar a lógica de envio para o servidor ou armazenamento local
    console.log('Dados enviados:', { name, cpf, comarca, vara });
  };

  return (
   
    <div className="defender-form-container">
      <Header/>
      <h2>Cadastro de Defensores</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input type="text" value={cpf} onChange={(e) => setCPF(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Comarca:</label>
          <input type="text" value={comarca} onChange={(e) => setComarca(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Vara:</label>
          <input type="text" value={vara} onChange={(e) => setVara(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <Footer/>
    </div>
  );
};

export default Defensores;
