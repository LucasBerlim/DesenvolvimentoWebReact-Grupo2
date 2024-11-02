import styles from './Cards.module.css'

export function Cards({imagem, imgDesc, titulo, descricao, preco}){
    return(
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardImg}>
                    <img src={imagem} alt={imgDesc} />
                </div>
                <div className={styles.cardTitulo}>
                    <h2>{titulo}</h2>
                </div>
                <div className={styles.cardDescricao}>
                    <p>{descricao}</p>
                </div>
                <div className={styles.cardPreco}>
                    <span>R${preco}</span>
                    <button className={styles.cardBotao}>Adicionar ao Carrinho</button>
                </div>
            </div>
        </>
    )
}