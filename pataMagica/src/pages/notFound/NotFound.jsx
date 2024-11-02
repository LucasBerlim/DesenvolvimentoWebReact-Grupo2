import styles from './NotFound.module.css'
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
    const navigate = useNavigate();

    const handleNavigation = (endereco) => {
        navigate("/" + endereco)
    }

    return (
        <>
            <h1>Erro 404: Not Found</h1>
            <button onClick={() => handleNavigation('')}>Voltar à página inicial</button>
        </>
    )
}