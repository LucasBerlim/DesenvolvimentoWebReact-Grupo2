import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"
import logo_nav from '../../assets/imglogoNav.png'
import login from '../../assets/login.png'
import carrinho from '../../assets/carrinho.png'
import { carrinhoContext } from "../../context/carrinhoContext";
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export function Navbar(){
    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate("/" + link);
    }
    const {contador} = useContext(carrinhoContext);
    const { signed, signOut } = useContext(AuthContext);

    const handleLogout = () => {
        signOut();
        handleNavigation('');
        alert("Conta desconectada com sucesso.")
    };

    return(
        <>
        <header className={styles.navHeader}>
            <div id={styles.logoImg} onClick={()=>handleNavigation('')}>
                <img src={logo_nav} alt="logo" />
            </div>
            <div className={styles.menuNav}>
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
                        <div>
                            <img src={login} alt="icone login" onClick={handleLogout} />
                            <button className={styles.linkLogin} onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className={styles.loginImg} onClick={() => handleNavigation('login')}>
                            <img src={login} alt="icone login" />
                            <button>Login</button>
                        </div>
                    )}
            </div>
        </header>
        </>
    )
}
