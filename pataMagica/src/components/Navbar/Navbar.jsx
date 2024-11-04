import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"
import logo_nav from '../../assets/imglogoNav.png'
import login from '../../assets/login.png'
import carrinho from '../../assets/carrinho.png'
import { carrinhoContext } from "../../context/carrinhoContext";
import { useContext } from 'react'

export function Navbar(){

    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate("/" + link);
    }
    const {contador} = useContext(carrinhoContext);

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
                <div className={styles.loginImg} onClick={()=>handleNavigation('cadastro')}>
                    <img src={login} alt="icone login" />
                </div>
                <button className={styles.linkLogin} onClick={()=>handleNavigation('cadastro')}>Login</button>
            </div>
        </header>
        </>
    )
}
