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
                    handleClick={() => handleClick("https://github.com/LucasBerlim")}
                    nomeBotao={"Linkedin"}
                    />

                <Cards
                    imagem={"src/assets/michele.png"}
                    imgDesc={"Miclele"}
                    titulo={"Michele"}
                    descricao={"Dev Full Stack"}
                    handleClick={() => handleClick("https://github.com/eumichelems")}
                    nomeBotao={"Linkedin"}
                    />

                    
                <Cards
                    imagem={"src/assets/nanda02.png"}
                    imgDesc={"Fernanda"}
                    titulo={"Fernanda"}
                    descricao={"Dev Full Stack"}
                    endereco={'https://github.com/eumichelems'}
                    nomeBotao={"Linkedin"}
                    />

                <Cards
                    imagem={"src/assets/Duda.png"}
                    imgDesc={"Eduarda Pinho"}
                    titulo={"Eduarda Pinho"}
                    descricao={"Dev Full Stack"}
                    endereco={"https://github.com/eumichelems"}
                    nomeBotao={"Linkedin"}
                    />

                <Cards
                    imagem={"https://github.com/brendachavesb.png"}
                    imgDesc={"Brenda Barbatti"}
                    titulo={"Brenda Barbatti"}
                    descricao={"Dev Full Stack"}
                    endereco={"https://github.com/brendachavesb"}
                    nomeBotao={"Linkedin"}
                    />  

                <Cards
                    imagem={"https://github.com/RenanFerreira2004.png"}
                    imgDesc={"Renan Ferreira"}
                    titulo={"Renan Ferreira"}
                    descricao={"Dev Full Stack"}
                    endereco={"https://github.com/RenanFerreira2004"}
                    nomeBotao={"Linkedin"}
                    />  
       </div>
        
        </>
       
    )
}