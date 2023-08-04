import React, { useState } from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FormContainer = styled.div`
  
  max-width: 400px;
  margin:  auto;
  padding: 20px;
  border: 1px solid #f2f2;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(4, 5, 6, 9.1);
  background-color: #1515;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
   
    <Header/>
    <section>
      <FormContainer>
        
        <Title>Cadastro de Férias</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Nome do Defensor:</Label>
          <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Label>Data de Início:</Label>
          <Input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
          <Label>Data de Fim:</Label>
          <Input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
      <Footer/>
    </section>
    </>
  );
};



export default Cadastro;