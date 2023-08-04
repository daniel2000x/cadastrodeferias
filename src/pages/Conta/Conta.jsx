import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './Conta.css'
const CadastroUsuario = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realize a validação e o envio dos dados para o servidor aqui
  };

  return (
    <div>
      <Header/>
      <h2>Alterar Senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Senha Atual:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nova Senha:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Nova Senha:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Alterar Senha</button>
      </form>
      <Footer />
    </div>
  );
};


export default CadastroUsuario;
