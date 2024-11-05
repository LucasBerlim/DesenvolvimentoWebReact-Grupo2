import styles from './Sobre.module.css'
import { Cards } from '../../components/Cards/Cards'

export function SobrePage() {
    const handleClick = (endereco) => window.location.assign(endereco)
    return (
        <>
        <div className={styles.sobre}><p>Sobre nós</p></div>
        <div className={styles.container}>
              
                <Cards
                    imagem={"src/assets/berlim.png"}
                    imgDesc={"Lucas Berlim"}
                    titulo={"Lucas Berlim"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://www.linkedin.com/in/lucas-berlim-705136265/")}
                    nomeBotao={"Linkedin"}
                    />

                <Cards
                    imagem={"src/assets/michele.png"}
                    imgDesc={"Miclele"}
                    titulo={"Michele"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://www.linkedin.com/in/michelemoreira-s/")}
                    nomeBotao={"Linkedin"}
                    />

                    
                <Cards
                    imagem={"src/assets/nanda02.png"}
                    imgDesc={"Fernanda"}
                    titulo={"Fernanda"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://www.linkedin.com/in/fernanda-canto/")}
                    nomeBotao={"Linkedin"}
                    />

                <Cards
                    imagem={"src/assets/Duda.png"}
                    imgDesc={"Eduarda Pinho"}
                    titulo={"Eduarda Pinho"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://www.linkedin.com/in/eduarda-pinho-064b44330/")}
                    nomeBotao={"Linkedin"}
                    />

                <Cards
                    imagem={"src/assets/brenda.png"}
                    imgDesc={"Brenda Barbatti"}
                    titulo={"Brenda Barbatti"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://www.linkedin.com/in/brenda-chaves-barbatti-947a91168/")}
                    nomeBotao={"Linkedin"}
                    />  

                <Cards
                    imagem={"src/assets/renan.png"}
                    imgDesc={"Renan Ferreira"}
                    titulo={"Renan Ferreira"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://www.linkedin.com/in/renan-ferreira-5714412a6/")}
                    nomeBotao={"Linkedin"}
                    />  
       </div>
        
        </>
       
    )
}
