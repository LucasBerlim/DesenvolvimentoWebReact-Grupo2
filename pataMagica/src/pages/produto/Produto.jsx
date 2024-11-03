import styles from './Produto.module.css'
import { Cards } from '../../components/Cards/Cards'

export function ProdutoPage() {
    return (
        <>
        <div className={styles.produtos}><p>Produtos</p></div>
        <div className={styles.container}>
            <Cards
            imagem= {"src/assets/realistic_pet_toys.png"}
            imgDesc= {"brinquedos fofos"}
            titulo= {"Brinquedos"}
            descricao={"Brinquedos variados para seu pet"}
            preco={"49,00"} />
            <Cards
            imagem= {"src/assets/alimentos_pet.png"}
            imgDesc= {"brinquedos fofos"}
            titulo= {"Brinquedos"}
            descricao={"Brinquedos variados para seu pet"}
            preco={"49,00"} />
            <Cards
            imagem= {"src/assets/realistic_pet_toys.png"}
            imgDesc= {"brinquedos fofos"}
            titulo= {"Brinquedos"}
            descricao={"Brinquedos variados para seu pet"}
            preco={"49,00"} />
            <Cards
            imagem= {"src/assets/alimentos_pet.png"}
            imgDesc= {"brinquedos fofos"}
            titulo= {"Brinquedos"}
            descricao={"Brinquedos variados para seu pet"}
            preco={"49,00"} />
            <Cards
            imagem= {"src/assets/realistic_pet_toys.png"}
            imgDesc= {"brinquedos fofos"}
            titulo= {"Brinquedos"}
            descricao={"Brinquedos variados para seu pet"}
            preco={"49,00"} />
            <Cards
            imagem= {"src/assets/alimentos_pet.png"}
            imgDesc= {"brinquedos fofos"}
            titulo= {"Brinquedos"}
            descricao={"ksajdfh s psoidfhos oalshfkjas alkjhfdkja kjahs ahnsdjkhnakl kajshd kajshdf iauyewruig kasdkçah çashrduharib açksfhdn asdfkahsdf asdkdfi haf edf hafd aj hsahdçh fdhaefd"}
            preco={"49,00"} />

        </div>
        </>
    )
}