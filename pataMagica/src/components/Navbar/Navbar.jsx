import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"
import logo_nav from '../../assets/imglogoNav.png'
import login from '../../assets/login.png'
import carrinho from '../../assets/carrinho.png'
import { carrinhoContext } from "../../context/carrinhoContext";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'

export function Navbar(){
    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate("/" + link);
    }
    const {contador} = useContext(carrinhoContext);
    const { signed, signOut, user } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        signOut();
        handleNavigation('');
        alert("Conta desconectada com sucesso.")
    };

    const alternaMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
        <header className={styles.navHeader}>
            <div id={styles.logoImg} onClick={()=>handleNavigation('')}>
                <img src={logo_nav} alt="logo" />
            </div>            
            <div className={`${styles.menuNav} ${menuOpen ? styles.menuAberto : ""}`}>
                <ul>
                    <li><button className={styles.linkMenu} onClick={()=>handleNavigation('')}>Home</button></li>
                    <li><button className={styles.linkMenu} onClick={()=>handleNavigation('sobre')}>Sobre</button></li>                    
                </ul>
            </div>
            <div id={styles.login}>
                <div className={styles.divCarrinho}  onClick={()=>handleNavigation('carrinho')}>
                    <img src={carrinho} alt="icone carrinho"/>
                    <span className={styles.contador}>{contador}</span>
                </div>
                {signed ? ( // Verifica se o usuário está autenticado
                <div className={styles.divLogin}>
                    {user && <span className={styles.boasVindas}> Boas vindas, {user}!</span>}
                    <div className={styles.loginImg}>
                        <img src={login} alt="icone login" onClick={handleLogout} />
                    </div>
                    <button className={styles.linkLogin} onClick={handleLogout}>Logout</button>
                </div>
                    ) : (
                        <div className={styles.divLogin}>
                            <div className={styles.loginImg}>
                                <img src={login} alt="icone login" onClick={() => handleNavigation('login')}/>
                            </div>
                            <button className={styles.linkLogin} onClick={() => handleNavigation('login')}>Login</button>
                        </div>
                    )}
            </div>
            <button className={styles.hamburguer} onClick={alternaMenu}>&#9776;</button>
        </header>
        </>
    )
}
