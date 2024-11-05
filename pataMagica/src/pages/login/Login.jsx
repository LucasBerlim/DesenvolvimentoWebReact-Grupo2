import { Input } from '../../components/Input/Input'
import styles from './Login.module.css'
import { Label } from '../../components/Label/Label'
import { useContext, useState } from 'react'
import logo from '../../assets/dogheart.png'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

export function LoginPage() {
    const { signed } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState(false);  // Estado para exibir erros de autenticação


    const handleSignIn = async (e) => {
        e.preventDefault();
        const data = {
            email,
            cpf,
        };

        await signIn(data);
    };

    if(signed){
        return <Navigate to="/" />
    } else{
    return (
        <>
            <div className={styles.loginTitulo}><p>Login</p></div>
            <div className={styles.container}>
                <form onSubmit={handleSignIn} className={styles.content}>
                    <img src={logo} alt="Logo" />
                    <div className={styles.divLogin}>
                        <Label label="Login:" tagInput="login" />
                        <Input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            tagInput="login"
                        />
                    </div>
                    <div className={styles.divSenha}>
                        <Label label="Senha:" tagInput="senha" />
                        <Input
                            type="password"
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            tagInput="senha"
                        />
                    </div>
                    {error && <p className={styles.error}>Email ou CPF incorretos</p>}
                    <button type="submit">Entrar</button>
                    <button type="button">Cadastrar</button>           
                </form>
            </div>
        </>
    );
}
}