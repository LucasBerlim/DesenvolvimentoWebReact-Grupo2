import styles from './Teste.module.css'
import { api } from "../../services/api"
import { useState } from 'react'

export function TesteCadastroPage() {

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

    /*let cliente = {
        email: "joaninha02@gmail.com",
        nomeCompleto: "JOANA FULANA PEREIRA",
        cpf: "187.923.290-00",
        telefone: "(21)99875-0699",
        dataNascimento: "2000-11-03",
        endereco: {
            cep: "22061030",
            numero: "2",
            complemento: "nao tem"
        }
    }*/

    //POST
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
            <div className={styles.container}>
                Email:<input type='text' onChange={e => setEmail(e.target.value)}/>
                Nome completo:<input type='text' onChange={e => setNome(e.target.value)}/>
                Cpf:<input type='text' onChange={e => setCpf(e.target.value)}/>
                Telefone:<input type='text' onChange={e => setTelefone(e.target.value)}/>
                Data de nascimento:<input type='date' onChange={e => setDataNascimento(e.target.value)}/>
                Cep:<input type='text' onChange={e => setCep(e.target.value)}/>
                Numero:<input type='text' onChange={e => setNumero(e.target.value)}/>
                Complemento:<input type='text' onChange={e => setComplemento(e.target.value)}/>

                <button onClick={() => saveCliente(cliente)}>cadastrar</button>
            </div>
            
        </>
    )
}
