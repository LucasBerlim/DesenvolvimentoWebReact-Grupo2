import styles from "./Carrinho.module.css";
import React, { useContext, useEffect } from "react";
import { carrinhoContext } from "../../context/carrinhoContext";

export function CarrinhoPage() {
  const {
    itensCarrinho,
    valorTotal,
    adicionarItens,
    removerItem,
    limparCarrinho,
    calcularValorTotal,
  } = useContext(carrinhoContext);

  useEffect(() => {
    calcularValorTotal();
  }, [itensCarrinho, calcularValorTotal]);

  return (
    <div className={styles.container}>
      <h1 className={styles.carrinhoTitulo}>Meu Carrinho</h1>
      <ul>
        {itensCarrinho.map((item) => (
          <li className={styles.carrinhoItens} key={item.id}>
            <p>
              {item.nome} - {item.quantidade} x R${item.preco}
            </p>
            <button onClick={() => adicionarItens(item)}>
              Adicionar Itens
            </button>
            <button onClick={() => removerItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h2>Valor Total: R${valorTotal}</h2>
      <button onClick={limparCarrinho}>Limpar Carrinho</button>
    </div>
  );
}
