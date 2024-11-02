import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"
import logo_nav from '../../assets/imglogoNav.png'
import login from '../../assets/login.png'

export function Navbar(){

    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate("/" + link);
    }

    return(
        <>
        <header className={styles.navHeader}>
            <div id={styles.logoImg}>
                <img src={logo_nav} alt="logo" />
            </div>
            <div className={styles.menuNav}>
                <ul>
                    <li><button className={styles.linkMenu} onClick={()=>handleNavigation('home')}>Home</button></li>
                    <li><button className={styles.linkMenu} onClick={()=>handleNavigation('sobre')}>Sobre</button></li>                    
                </ul>
            </div>
            <div id={styles.login}>
                <div className={styles.loginImg}>
                    <img src={login} alt="icone login" />
                </div>
                <button className={styles.linkLogin} onClick={()=>handleNavigation('login')}>Login</button>
            </div>
        </header>
        </>
    )
}
