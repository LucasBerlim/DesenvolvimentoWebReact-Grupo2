import { useEffect, useState } from "react";
import { createContext } from "react";

export const carrinhoContext = createContext();

export const CarrinhoProvider = (props) => {
  const [itensCarrinho, setItensCarrinho] = useState(() => {
    const itensLocais = localStorage.getItem('itensCarrinho');
    return itensLocais ? JSON.parse(itensLocais) : [];
  });

  const [valorTotal, setValorTotal] = useState(0);
  const [contador, setContador] = useState(0);

  const adicionarItens = (novoItem) => {
    const produtoExistente = itensCarrinho.find(
      produto => produto.id === novoItem.id);

    let novosItens;

    if (produtoExistente) {
      novosItens = itensCarrinho.map(item => 
        item.id === novoItem.id ? { ...item, quantidade: item.quantidade + 1} : item);          
        } else {
          novosItens = [...itensCarrinho, { ...novoItem, quantidade: 1}];
        }
        setItensCarrinho(novosItens);

      };
    
    const removerItens = (id) => {
      const novosItens = itensCarrinho.filter(item => item.id !== id);
      setItensCarrinho(novosItens);
    }

    const removerUmItem = (id) => {
      const novosItens = itensCarrinho.map(item => 
        item.id === id && item.quantidade >1 ? { ... item, quantidade: item.quantidade -1} : item)
        .filter(item => item.quantidade > 0);
        setItensCarrinho(novosItens);
    }

    const limparCarrinho = () => {
      setItensCarrinho([]);
      setValorTotal(0);
    }    

    const calcularValorTotal = () => {
      const total = itensCarrinho.reduce((valorAtual, item) => valorAtual + item.quantidade * item.valorUnitario, 0);      
      setValorTotal(total);
    };

    useEffect(() => {
      calcularValorTotal();
      localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
    }, [itensCarrinho]);

    const contadorCarrinho = () => {
      const contador = itensCarrinho.reduce((total, item) => total + item.quantidade, 0);
      setContador(contador);
    }
    useEffect(() => {
      contadorCarrinho();
      localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
    }, [itensCarrinho]);


  return (
    <carrinhoContext.Provider
      value={{
        itensCarrinho,
        valorTotal,
        contador,
        adicionarItens,
        removerItens,
        removerUmItem,
        limparCarrinho,
        calcularValorTotal,
        contadorCarrinho
      }}
    >
      {props.children}
    </carrinhoContext.Provider>
  );
};