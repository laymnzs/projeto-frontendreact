import { ProdutoCardContainer } from "./ProdutoCard.styled";
import { precoFormatter } from "../../valor total/PrecoFormatter";

function ProdutoCard(props) {
  
  //todas as informações do produtos estão sendo passadas pela props
  //desestruturando a props (que vai pegar a referência de PRODUTOS)

    const {
           produto,
           adicionarCarrinho,
           estaNaTelaProdutos,
           estaNaTelaCarrinho,
           aumentaQuantidadeCarrinho,
           diminuiQuantidadeCarrinho,
           deletarItemCarrinho
          } = props

  //<p>{estaNaTelaProdutos && "Sou da Tela de Produtos"}</p>   {/*ira mostrar quando for da tela de produtos */}
  //<p>{estaNaTelaCarrinho && "Sou da Tela de Carrinho"}</p>   {/*ira mostrar quando for da tela de carrinho */}


  return (
    <ProdutoCardContainer>

       <div className="url">
      <img src={produto.url} width="150px" alt="Camisetas" />
      </div> 


      <div>
        <div className="card-header">
          <h1>{produto.nome}</h1>
          </div>

          <div className="card-preco">
          <span>{precoFormatter.format(produto.preco)}</span>
        </div>

      
    {/* se produto for maior que 1, ex: 2 (produtos), então poderá "remover/diminuir"  1 quantidade*/}

      {
      estaNaTelaCarrinho && produto.quantidade > 1
      && <button 
      onClick={() => diminuiQuantidadeCarrinho(produto)}
      >
      -
      </button>
      }


       {/* se produto for maior que 1, então poderá adicionar +1 quantidade*/}
      {    
        estaNaTelaCarrinho  
        && <button 
        onClick={() => aumentaQuantidadeCarrinho(produto)}
        >
        +
        </button>
      }

        <div className="card-carrinho">
          {/*TERNARIO CRIADO para mostrar o botão somente na pagina do PRODUTO e não do carrinho*/} 

          {/* argumento (=>) chama a função que espera receber o produto */}
          {estaNaTelaProdutos && <button onClick={() => adicionarCarrinho(produto)}>Adicionar ao Carrinho</button>}


          {/*Se estiver na tela de CARRINHO, mostrará a quantidade*/}
          {estaNaTelaCarrinho && <span>x{produto.quantidade}</span>
          }
          </div>
          </div>

          
          {/* caso esteja na tela de carrinho, poderá remover o item do carrinho pelo EMOJI VERMELHO */}

          {
            estaNaTelaCarrinho && <button onClick={() => deletarItemCarrinho(produto)}>❌</button>
          }


    </ProdutoCardContainer>
  );
}

export default ProdutoCard;
