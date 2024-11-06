import styles from './Cadastro.module.css'
import { api } from "../../services/api"
import { useEffect, useState } from 'react'
import { Label } from '../../components/Label/Label'
import { Input } from '../../components/Input/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Cadastro(){

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const navigate = useNavigate();

    const [address, setAddress] = useState({
        cidade: '',
        rua: '',
        bairro: '',
        uf: ''
    });

    useEffect(() => {
        if (cep.length === 8) {
            const fetchAddress = async () => {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    if (response.data.erro) {
                        alert('CEP não encontrado!');
                    } else {
                        setAddress({
                            cidade: response.data.localidade,
                            rua: response.data.logradouro,
                            bairro: response.data.bairro,
                            uf: response.data.uf
                        });
                    }
                } catch (error) {
                    console.error('Erro ao buscar o CEP:', error);
                    alert('Erro ao buscar o CEP.');
                }
            };
            fetchAddress();
        }
    }, [cep]);

    const saveCliente = async (e) => {
        e.preventDefault();
        const cliente = {
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
        try {
            await api.post('/clientes', cliente)
            alert('Cliente cadastrado com sucesso!');
            navigate('/login')
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
                <form onSubmit={saveCliente} className={styles.content}>
                    <div className={styles.divNome}>
                        <div className={styles.nomeCompleto}>
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
                        <div className={styles.dataNascimento}>
                            <Label
                            label={"Data de nascimento:"}
                            tagInput={"nome"}/>
                            <Input
                            type={"date"}
                            value={dataNascimento} 
                            onChange={(e) => setDataNascimento(e.target.value)}
                            tagInput={"dataNascimento"}/>
                        </div>
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

                        <Label
                        label={"Cep:"}
                        tagInput={"cep"}/>
                        <Input
                        type={"text"} 
                        placeholder={"Insira seu CEP"} 
                        value={cep} 
                        onChange={(e) => setCep(e.target.value)}
                        tagInput={"cep"}/>
                    </div>

                    <div className={styles.divEndereco}>
                        <div className={styles.endereco}>
                            <Label
                            label={"Endereço:"}
                            tagInput={"endereco"}/>
                            <Input
                            tagInput={"endereco"}
                            type={"text"} 
                            placeholder={"Insira seu endereço"} 
                            value={`${address.rua}, ${address.bairro}, ${address.cidade}, ${address.uf}`}
                            onChange={(e) => setCep(e.target.value)}/>
                        </div>
                        <div className={styles.numero}>
                            <Label
                            label={"Nº:"}
                            tagInput={"numero"}/>
                            <Input
                            type={"text"} 
                            placeholder={"Insira o numero"} 
                            value={numero} 
                            onChange={(e) => setNumero(e.target.value)}
                            tagInput={"numero"}/>
                        </div>
                    </div>

                    <div className={styles.divTelefone}>
                        <Label
                        label={"Complemento:"}
                        tagInput={"complemento"}/>
                        <Input
                        type={"text"} 
                        placeholder={"Insira o complemento"} 
                        value={complemento} 
                        onChange={(e) => setComplemento(e.target.value)}
                        tagInput={"complemento"}/>

                        <Label
                        label={"Telefone:"}
                        tagInput={"telefone"}/>
                        <Input
                        type={"text"} 
                        placeholder={"Insira seu telefone"} 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)}
                        tagInput={"telefone"}/>
                    </div>

                    <div className={styles.divSenha}>
                        <Label
                        label={"Senha:"}
                        tagInput={"senha"}/>
                        <Input
                        type={"password"} 
                        placeholder={"Insira sua senha"} 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)}
                        tagInput={"senha"}/>

                        <Label
                        label={"Confirme a sua senha:"}
                        tagInput={"confirmacao"}/>
                        <Input
                        type={"password"} 
                        placeholder={"Repita sua senha"} 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)}
                        tagInput={"confirmacao"}/>                
                    </div>
                    <div className={styles.divBotao}>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}