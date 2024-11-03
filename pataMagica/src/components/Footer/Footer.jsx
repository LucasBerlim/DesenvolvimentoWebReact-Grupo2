import styles from './Footer.module.css'
import { useNavigate } from "react-router-dom"

export function Footer() {

    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate("/" + link);
    }

    const linkedin = [
        {
            nome: 'Lucas Berlim',
            link: 'https://www.linkedin.com/in/lucas-berlim-705136265/'
        },
        {
            nome: 'Fernanda Canto',
            link: 'https://www.linkedin.com/in/fernanda-canto/'
        },
        {
            nome: 'Michele Silva',
            link: 'https://www.linkedin.com/in/michelemoreira-s/'
        },
        {
            nome: 'Renan Ferreira',
            link: '#'
        },
        {
            nome: 'Brenda Barbatti',
            link: 'https://www.linkedin.com/in/brenda-chaves-barbatti-947a91168/'
        },
        {
            nome: 'Eduarda Pinho',
            link: 'https://www.linkedin.com/in/eduarda-pinho-064b44330/'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p>Pata Mágica - All rights reserved</p>
                <p>Endereço: Rua Exemplo, 123</p>
                <p>Telefone: (21) 1234-5678</p>
                <p>Email: contato@lojavirtual.com</p>
            </div>
            <div className={styles.info}>
                <button onClick={()=>handleNavigation('home')}>Home</button>
                <button onClick={()=>handleNavigation('sobre')}>Sobre</button>
            </div>
            <div>
                <ul>
                    {linkedin.map(pessoa => (
                        <li key={pessoa.nome}>
                            <a href={pessoa.link}>
                                <img src="src/assets/in.png" alt="LinkedIn" />
                                <p>{pessoa.nome}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
