/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
//useState, armazena email e senha

import Footer from '../../components/Footer';
import { AuthContext } from '../../contexts/auth';

import '../../App.css';
import Header from '../../components/Header';


const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password); //integração com o meu contexto / api


    };
    return (
        
        <div className="caixalogin" >
            
        <div className="container " id="login">
            
                <h1 className="title">Autenticação</h1>
                <p>{String(authenticated)}</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="box-user">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="box-user">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <a href="/ResetSenha" class="forget"> Esqueceu a Senha?</a>
                    </div>

                    <div className="btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button className="container-btn" type="submit">Entrar</button>
                    </div>



                </form>
                <Footer />
            </div>
        </div>
    );
};

export default LoginPage;