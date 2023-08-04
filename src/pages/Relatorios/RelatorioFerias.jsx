import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './App.css'
const RelatorioFerias = () => {
  const [ferias, ] = useState([
    { id: 1, nome: 'João', periodo: '10/2023 - 11/2023' },
    { id: 2, nome: 'Maria', periodo: '08/2023 - 09/2023' },
    { id: 3, nome: 'Pedro', periodo: '07/2023 - 08/2023' },
  ]);

  return (
    <div>
      <Header/>
      <h1>Relatório de Férias</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Período</th>
          </tr>
        </thead>
        <tbody>
          {ferias.map((ferias) => (
            <tr key={ferias.id}>
              <td>{ferias.id}</td>
              <td>{ferias.nome}</td>
              <td>{ferias.periodo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default RelatorioFerias
