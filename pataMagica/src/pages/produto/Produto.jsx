import styles from './Produto.module.css'
import { Cards } from '../../components/Cards/Cards'
import { useContext, useEffect, useState } from 'react';
import { carrinhoContext } from '../../context/carrinhoContext';
import { api } from '../../services/api';

export function ProdutoPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { adicionarItens } = useContext(carrinhoContext);

    const getProducts = async () => {
        try {
            
            const response = await api.get("/produtos");            
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

    loading && <p>Loading...</p>
    error && <p>Error: {error}</p>

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
