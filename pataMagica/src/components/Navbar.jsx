import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"
import logo_nav from '../../src/images/imglogonav.svg'

export function Navbar(){

    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate("/" + link);
    }

    return(
        <>
        <header className={styles.logo}>
            <div id={styles.logoImg}>
                <img src={logo_nav} alt="logo" />
            </div>
            <div className={menuNav}>
                <ul>
                    <li><button onClick={()=>handleNavigation('home')}>Home</button></li>
                    <li><button onClick={()=>handleNavigation('sobre')}>Sobre</button></li>                    
                </ul>
            </div>
            <div className="login"></div>
        </header>
        </>
    )
}
