import { Input } from '../../components/Input/Input'
import styles from './Login.module.css'
import { Label } from '../../components/Label/Label'
import { useContext, useState } from 'react'
import logo from '../../assets/dogheart.png'
import { AuthContext } from '../../context/auth'
import { Navigate } from 'react-router-dom'

export function LoginPage(){

    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const { signIn, signed } = useContext(AuthContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const data = {
            email,
            cpf,
        };

        await signIn(data);
    };

    if(signed){
        return <Navigate to="" />
    } else{  

    return(
        <>
        <div className={styles.loginTitulo}><p>Login</p></div>
        <div className={styles.container}>
            <form onSubmit={handleSignIn} className={styles.content}>
                <img src={logo} />
                <div className={styles.divLogin}>
                    <Label
                    label={"Login:"}
                    tagInput={"login"}/>
                    <Input
                    type={"email"}
                    placeholder={"Digite seu email"}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    tagInput={"login"}
                    />
                </div>
                <div className={styles.divSenha}>
                    <Label
                    label={"Senha:"}
                    tagInput={"senha"}/>
                    <Input
                    type={"password"}
                    placeholder={"Digite seu CPF"}
                    value={cpf} 
                    onChange={(e) => setCpf(e.target.value)}
                    tagInput={"senha"}
                    />
                </div>
                <button type='submit'>Entrar</button>
                <button>Cadastrar</button>           
            </form>
        </div>
        </>
    );
}
}
