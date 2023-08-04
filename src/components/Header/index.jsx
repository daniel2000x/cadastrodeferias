import styles from "./Header.module.css";
import { Link } from "react-router-dom";


function Header () {
    return (
        <header className={styles.header}>
             <Link to="/">
                <span>DPE</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Cadastro">Cadastro</Link>
                <Link to="/relatorios">Relatórios</Link>
                <Link to="/defensores">Defensores</Link>
                <Link to="/conta">Conta</Link>
            </nav>
        
        
        </header>

   )
}

export default Header;