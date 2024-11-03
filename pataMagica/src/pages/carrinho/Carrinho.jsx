import styles from "./Carrinho.module.css";
import React, { useContext, useEffect } from "react";
import { carrinhoContext } from "../../context/carrinhoContext";

export function CarrinhoPage() {
  const {
    itensCarrinho,
    valorTotal,
    adicionarItens,
    removerItens,
    removerUmItem,
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
              {item.nome} - {item.quantidade} x R${item.valorUnitario}
            </p>
            <button onClick={() => adicionarItens(item)}>+</button>
            <button onClick={() => removerUmItem(item.id)}>-</button>
            <button onClick={() => removerItens(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <h2>Valor Total: R${valorTotal}</h2>
      <button onClick={limparCarrinho}>Limpar</button>
    </div>
  );
}
