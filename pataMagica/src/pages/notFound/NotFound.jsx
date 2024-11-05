import styles from './NotFound.module.css'
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
    const navigate = useNavigate();

    const handleNavigation = (endereco) => {
        navigate("/" + endereco)
    }

    return (
        <div className={styles.container}> 
            <h1>Erro 404: Not Found</h1>
            <button className={styles.notFoundButton} onClick={() => handleNavigation('')}>Voltar à página inicial</button>
        </div>
    )
}