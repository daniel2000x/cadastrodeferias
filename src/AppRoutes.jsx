import React, {useContext} from "react";
// nova alteração de rota no rect dom router 6
// antes tinha os switc agr temos os route e routes
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Conta from "./pages/Conta/Conta";

import { AuthProvider, AuthContext} from "./contexts/auth";
import Cadastro from "./pages/Cadastro";
import RelatorioFerias from "./pages/Relatorios/RelatorioFerias";
import Defensores from "./pages/Defensores/Defensores";
import Resetsenha from "./pages/ResetSenha/resetsenha"



const AppRoutes = () => {
    const Private = ({children}) =>{
        const {authenticated, loading } = useContext(AuthContext);

        if (loading) {
           return <div className="loading">Carregando...</div> 
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }

        return children;

    }
   
return(
    <Router>
        <AuthProvider>
        <Routes>
         
            <Route exact path="/login" element =
            {<LoginPage />} />
            
            <Route
            exact
            path="/"
            element={
                <Private>
                    <HomePage />
                    
                    
                </Private>
            }
            
            />
             
             <Route path="conta" element={<Conta/>}></Route>
             <Route path="Cadastro" element={<Cadastro/>}></Route>
             <Route path="relatorios" element={<RelatorioFerias/>}></Route>
             <Route path="defensores" element={<Defensores/>}></Route>
             <Route path="Resetsenha" element={<Resetsenha/>}></Route>
            </Routes>
        </AuthProvider>
    </Router>

);
}



export default AppRoutes;