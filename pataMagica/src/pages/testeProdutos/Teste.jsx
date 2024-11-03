import styles from './Teste.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Cards } from '../../components/Cards/Cards'
/*import { api } from "../../services/api"*/

export function TesteProdutosPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        try {
            //const response = await axios.get(`${api}/produtos`);
            const response = await axios.get("http://localhost:8080/produtos");
            //const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className={styles.produtos}><p>Produtos</p></div>
            <div className={styles.container}>
                {products.map((product) => (
                    <Cards
                        imagem= {product.imagem}
                        imgDesc= {product.nome}
                        titulo= {product.nome}
                        descricao={product.descricao}
                        preco={product.valorUnitario}
                    />
                ))}
                <Cards
                imagem= {"src/assets/realistic_pet_toys.png"}
                imgDesc= {"brinquedos fofos"}
                titulo= {"Brinquedos"}
                descricao={"Brinquedos variados para seu pet"}
                preco={"49,00"} />
            </div>
        </>
    );
}
