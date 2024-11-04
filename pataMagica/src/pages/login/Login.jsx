import { Input } from '../../components/Input/Input'
import styles from './Login.module.css'

export function LoginPage(){

    return(
        <>
        <div className={styles.loginTitulo}><p>Login</p></div>
        <div className={styles.container}>
            <Input
            type={"email"}
            placeholder={"Digite seu email"}
            />

            <Input
            type={"password"}
            placeholder={"Digite sua senha"}
            />

            <button>Entrar</button>
            <button>Cadastrar</button>
           
        </div>
        </>
    )
}
