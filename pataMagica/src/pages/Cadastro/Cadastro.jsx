import styles from './Cadastro.module.css'
import { api } from "../../services/api"
import { useState } from 'react'
import { Label } from '../../components/Label/Label'
import { Input } from '../../components/Input/Input'

export function Cadastro(){

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    let cliente = {
        email: email,
        nomeCompleto: nome,
        cpf: cpf,
        telefone: telefone,
        dataNascimento: dataNascimento,
        endereco: {
            cep: cep,
            numero: numero,
            complemento: complemento
        }
    }

    const saveCliente = async (cliente) => {
        //o que veio do usuário será passado como parametro na chamada da função
        // no lugar do objeto podem ser passados tambem as variáveis
          
        try {
           await api.post('/clientes', cliente)
           alert('Cliente cadastrado com sucesso!');
        } catch (error) {
           console.log(error)
           alert(
              error.response.data.message + ' ' + 
              error.response.data.details
           )
        }
     }

    return (
        <>
            <div className={styles.cadastroTitulo}><p>Cadastro</p></div>
            <div className={styles.container}>
                    <div className={styles.content}>

                <div className={styles.divNome}>
                <Label
                label={"Nome completo:"}
                tagInput={"nome"}/>
                <Input
                type={"text"} 
                placeholder={"Insira seu nome e sobrenome"} 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}
                tagInput={"nome"}/>
                </div>

                <div className={styles.divEmail}>
                <Label
                label={"Email:"}
                tagInput={"email"}/>
                <Input
                type={"email"} 
                placeholder={"Insira seu email"} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                tagInput={"email"}/>

                <Label
                label={"CPF:"}
                tagInput={"cpf"}/>
                <Input
                type={"text"} 
                placeholder={"Insira seu CPF"} 
                value={cpf} 
                onChange={(e) => setCpf(e.target.value)}
                tagInput={"cpf"}/>
                </div>

                <div className={styles.divCep}>
                <Label
                label={"Cep:"}
                tagInput={"cep"}/>
                <Input
                type={"text"} 
                placeholder={"Insira seu CEP"} 
                value={cep} 
                onChange={(e) => setCep(e.target.value)}
                tagInput={"cep"}/>

                <Label
                label={"Endereço:"}
                tagInput={"endereco"}/>
                <Input
                type={"text"} 
                placeholder={"Insira seu endereço"} 
                value={cep} 
                onChange={(e) => setCep(e.target.value)}
                tagInput={"endereco"}/>
                </div>
                <div>

                <Label
                label={"Nº:"}
                tagInput={"numero"}/>
                <Input
                type={"text"} 
                placeholder={"Insira o numero"} 
                value={numero} 
                onChange={(e) => setNumero(e.target.value)}
                tagInput={"numero"}/>

                <Label
                label={"Complemento:"}
                tagInput={"complemento"}/>
                <Input
                type={"text"} 
                placeholder={"Insira o complemento"} 
                value={complemento} 
                onChange={(e) => setComplemento(e.target.value)}
                tagInput={"complemento"}/>
                </div>

                <Label
                label={"Telefone:"}
                tagInput={"telefone"}/>
                <Input
                type={"text"} 
                placeholder={"Insira seu telefone"} 
                value={telefone} 
                onChange={(e) => setTelefone(e.target.value)}
                tagInput={"telefone"}/>

                <Label
                label={"Senha:"}
                tagInput={"senha"}/>
                <Input
                type={"password"} 
                placeholder={"Insira sua senha"} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                tagInput={"senha"}/>

                <Label
                label={"Confirme a sua senha:"}
                tagInput={"confirmacao"}/>
                <Input
                type={"passwrod"} 
                placeholder={"Repita sua senha"} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                tagInput={"confirmacao"}/>                

                <button onClick={() => saveCliente(cliente)}>cadastrar</button>
                </div>
            </div>
            
        </>
    )
}