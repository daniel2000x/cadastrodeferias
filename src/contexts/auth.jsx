// é a parte que faz o controle de login, e nao so a regra de negocio, regra de sistema
// faz o armazenamento dessa infomçaao de forma global
//quer saber qual o usuario logado no sistema
 
import React, { useState, useEffect, createContext,  } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
//esse loading ajuda a controlar e ajuda o noso front end a exibir a pagina de carregando
        setLoading(false);
    }, []);

    const login = (email, password) => {

        const loggedUser = {
            id: "123",
            email,

            
        };
// json.STRINGFY PRA TRANSFORMR EM STRING
        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "secret") {
        setUser(loggedUser);
        navigate("/");
        }
    };

    const logout = () =>{
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");

    };
    return (
        <AuthContext.Provider
        value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};