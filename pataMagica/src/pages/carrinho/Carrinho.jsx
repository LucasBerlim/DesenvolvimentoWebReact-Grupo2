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
    <>
    <div className={styles.carrinhoTitulo}><p>Meu Carrinho</p></div>
    <div className={styles.container}>
      <div className={styles.content}>
        <table>
          <tr>
            <th className={styles.descricao}>Itens no carrinho</th>
            <th className={styles.quantidade}>Quantidade</th>
            <th>Preço</th>
          </tr>          
          {itensCarrinho.map((item) => (
          <tr key={item.id}>
            <td className={styles.descricao}>
              <img src={item.imagem}/>            
                {item.nome}
            </td>
            <td className={styles.quantidade}>
              <button onClick={() => adicionarItens(item)} className={styles.botaoMais}>+</button>
              <span>{item.quantidade}</span>
              <button onClick={() => removerUmItem(item.id)} className={styles.botaoMenos}>-</button>
              <button onClick={() => removerItens(item.id)} className={styles.botaoX}>X</button>
            </td>
            <td className={styles.preco}>
              R${item.valorUnitario}
            </td>            
          </tr>

  ))}
        </table>
        <p className={styles.total}>Valor Total: R${valorTotal}</p>
        <button onClick={limparCarrinho} className={styles.botaoLimpar}>Limpar Carrinho</button>
      </div>
    </div>
    </>
  );
}
