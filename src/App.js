import { useState } from "react";
import ProdutosTela from "./telas/Produtos/ProdutosTela";
import CarrinhoTela from "./telas/Carrinho/CarrinhoTela";
import Header from "./componentes/Header/Header";
import ContatoTela from "./telas/Contato/ContatoTela";

function App() {
  //começa na página principal (PRODUTOS)
  const [ativaTela, setAtivaTela] = useState("ProdutosTela");

  //carrinho começa vazio
  const [carrinho, setCarrinho] = useState([]);

  const [contato, setContato] = useState([]);

  //filtrará o texto no input
  const [filtraTexto, setFiltraTexto] = useState("");


  //função responsável pela troca de telas:

  //paginaProdutos => leva para a página dos produtos;
  //paginaCarrinho => leva para a página do carrinho.

  const paginaProdutos = () => {
    setAtivaTela("ProdutosTela");
  };

  const paginaCarrinho = () => {
    setAtivaTela("CarrinhoTela");
  };

  const paginaContato = () => {
    setAtivaTela("ContatoTela");
  };

  //adiciona o produto no carrinho
  const adicionarCarrinho = (produtoAdicionado) => {
    const novoCarrinho = [...carrinho];

    //LOGICA: irá buscar o PRODUTO no carrinho, se não existir nada, será adicionado 1 item no carrinho.
    //FIND: procurando por

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAdicionado.id
    );

    if (!produtoEncontrado) { //IF- se não encontrar o produto, terá que adicionar no carrinho.

    const novoProduto = { ...produtoAdicionado, quantidade: 1 };
    novoCarrinho.push(novoProduto);


    } else {  //SE encontrar novo produto, adiciona +1 na quantidade:


      produtoEncontrado.quantidade++;
    }

    setCarrinho(novoCarrinho);
  };



  //função que deleta botão do carrinho

  const deletarItemCarrinho = (produtoDeletado) => {
  const novoCarrinho = [...carrinho]
    
  const indexEncontrado = novoCarrinho.findIndex(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoDeletado.id
    );

    novoCarrinho.splice(indexEncontrado, 1)
    setCarrinho(novoCarrinho)
  }


  //onChange (EVENTO CONTROLADO)
  const onChangeFiltraTexto = (e) => {//enviar função para Tela de Produtos
  setFiltraTexto(e.target.value) //enviando como props
 }


  //LINHA 61 à 88 - SÃO FUNÇÕES QUE DIMINUEM OU AUMENTAM A QUANTIDADE

  //função que AUMENTA a quantidade do produto no carrinho e que será editada
    const aumentaQuantidadeCarrinho = (produtoAumenta) => {

    const novoCarrinho = [...carrinho]; //ira fazer a copia do carrinho (MESMA LÓGICA DA LINHA 40)

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAumenta.id
    );

    produtoEncontrado.quantidade++; //encontrou o produto, então aumenta a quanidade

    setCarrinho(novoCarrinho);
  };


    //função que DIMINUI a quantidade do produto no carrinho e que será editada
    const diminuiQuantidadeCarrinho = (produtoDiminui) => {
    
    const novoCarrinho = [...carrinho]; //ira fazer a copia do carrinho (MESMA LÓGICA DA LINHA 40)

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoDiminui.id
    );

    produtoEncontrado.quantidade--;  //encontrou o produto, então aumenta a quanidade

    setCarrinho(novoCarrinho);
  };

  //RENDERIZAÇÃO CONDICIONAL DAS TELAS:

  const renderTela = () => {   //quando a função for executada:

    switch (ativaTela) {

      //ProdutosTela recebe a função de adicionar (pois tem o BOTÃO.)

      case "ProdutosTela": //irá retornar a Tela de Produtos
        return <ProdutosTela   //tela de produtos terá acesso ao que foi digitado no HEADER
         adicionarCarrinho={adicionarCarrinho}
         filtraTexto={filtraTexto}
         />;

      case "CarrinhoTela": // irá retornar a Tela de Carrinho
        return <CarrinhoTela 
        carrinho={carrinho}
        aumentaQuantidadeCarrinho={aumentaQuantidadeCarrinho}
        diminuiQuantidadeCarrinho={diminuiQuantidadeCarrinho} 
        deletarItemCarrinho={deletarItemCarrinho}
        />;
      //CarrinhoTela recebe o valor do carrinho e de remover

      case "ContatoTela": //OU irá retornar a Tela de Contato
        return <ContatoTela contato={contato} />;
      //CarrinhoTela recebe o valor do carrinho e de remover

      default:
        return <div>Desculpe, mas está Tela não existe.</div>; //OU irá retornar a Tela não existente
    }
  };

  return (
    <>
      <Header
        paginaProdutos={paginaProdutos}
        paginaCarrinho={paginaCarrinho}
        paginaContato={paginaContato}
        itensNoCarrinho={carrinho.length} //o HEADER irá falar quantos itens tem no carrinho
        filtraTexto={filtraTexto} //valor do input (barra de pesquisa)
        onChangeFiltraTexto={onChangeFiltraTexto}
       
      />
      {renderTela()}
    </>
  );
}

export default App;
