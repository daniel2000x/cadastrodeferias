import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';






const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();

    };
    return (
        <>
            <Header />
            <section>
                <h1>Bem-vindo ao Sistema de cadastro de férias</h1>
                <p>Verique quem está férias atualmente e cadastre um novo Defensor</p>

            </section>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>SAIR</button>
            <Footer/>
        </>
    );
};

export default HomePage;