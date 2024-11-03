import styles from './Produto.module.css'
import { Cards } from '../../components/Cards/Cards'
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { carrinhoContext } from '../../context/carrinhoContext';

export function ProdutoPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { adicionarItens } = useContext(carrinhoContext);

    const getProducts = async () => {
        try {
            
            const response = await axios.get("http://localhost:8080/produtos");            
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
                            key={product.id}
                            imagem= {product.imagem}
                            imgDesc= {product.nome}
                            titulo= {product.nome}
                            descricao={product.descricao}
                            preco={`R$${product.valorUnitario}`}
                            nomeBotao={"Adicionar ao carrinho"}
                            handleClick={() => adicionarItens(product)}
                        />
                    ))}
        </div>
        </>
    )
}
