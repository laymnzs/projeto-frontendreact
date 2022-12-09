import ProdutoCard from "../../componentes/ProdutoCard/ProdutoCard";
import produtos from "../../produtos/Produtos.json";
import { Main } from "./ProdutosTela.styled";

function ProdutosTela(props) {

  // antes de renderizar na tela, irá filtrar para procurar o nome digitado.
  const { 
    adicionarCarrinho,
    filtraTexto,
     } = props

  

  //pega a lista de produtos e  o produto
  const filterProdutosByText = () => {
    return produtos.filter(
      (produto) => produto.nome.toLocaleLowerCase().includes(filtraTexto.toLocaleLowerCase()));
  };

  //.filter((produto) => produto.preco <= 30)  FILTRANDO POR VALOR MENOR QUE 30
  //.filter((produto) => produto.nome.toLocaleLowerCase().includes("a".toLocaleLowerCase()))

  return (
   //MAIN - somente os cards dos produtos

    <Main>
      <section>

        <div className="welcome">
            <h1> Bem-vindo ao <span>ASTRODEV</span>
            </h1>
        </div>

            <div className="welcome-logo">
            <p>Aqui temos Camisetas com as estampas mais divertidas relacionadas ao espaço.</p>
            </div>
    
      <h1>Camisetas</h1>

      {
        //retorno do map, está passando por props o PRODUTO. LINHA 42
        //KEY = MAP, sem ele dará erro!    OBS.: TODO MAP tem que retornar uma KEY!
        filterProdutosByText()
        .map((produto) => (

      //o pai do PRODUTOCARD é a SECTION
      /*o que está sendo enviado para ProdutoCard:
      o produto e a função de adicionar no carrinho; */
      <ProdutoCard   
      produto={produto} 
      adicionarCarrinho={adicionarCarrinho}
      key={produto.id}
      
      estaNaTelaProdutos={true}
      //estaNaTelaProdutos é verdadeiro quando ESTIVER NA TELA DE PRODUTOS
      />


))
}
      </section>

      
    </Main>
  );
}

export default ProdutosTela;
