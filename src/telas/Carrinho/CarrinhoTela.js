import ProdutoCard from "../../componentes/ProdutoCard/ProdutoCard"
import { Main } from "./CarrinhoTela.styled"
import { precoFormatter } from "../../valor total/PrecoFormatter"
import money from "../../logo/money.png"

function CarrinhoTela (props) {

  //função está recebendo carrinho, aumentaQuantidade e diminuiQuantidade
  const { 
    carrinho,
    aumentaQuantidadeCarrinho,
    diminuiQuantidadeCarrinho,
    deletarItemCarrinho
   } = props

  //calculo do carrinho usando reduce
  const valorTotal = carrinho.reduce(
      (acumulador, produto) => produto.preco * produto.quantidade + acumulador,
      0
  )

    return (
      <Main>
      <section>
      <h1>Meu Carrinho 🛒</h1>

      <div className="oferta">
      <p> Você encontra variedade, qualidade e preço baixo aqui na <span>ASTRODEV</span>.</p>
      </div>
            

      {carrinho.map((produto) => (
      <ProdutoCard
      produto={produto}
      key={produto.id}
      estaNaTelaCarrinho={true} //estaNaTelaProdutos é verdadeiro quando ESTIVER na tela de Carrinho
      aumentaQuantidadeCarrinho={aumentaQuantidadeCarrinho}
      diminuiQuantidadeCarrinho={diminuiQuantidadeCarrinho}
      deletarItemCarrinho={deletarItemCarrinho}
      />
))}

      <div className="astronauta">
   <img src={money} width="250px" alt="Astronauta" />
   </div>

   <div className="valor-total">
      <b>Valor total:  {precoFormatter.format(valorTotal)}</b>
      </div>
      </section>


    </Main>
 )
}

export default CarrinhoTela


//.filter((produto) => produto.nome.toLocaleLowerCase().includes("a".toLocaleLowerCase()))
//.filter((produto) => produto.preco <= 30)  FILTRANDO POR VALOR MENOR QUE 30
//retorno do map, está passando por props o PRODUTO.
//KEY = MAP, sem ele dará erro!
//TODO MAP tem que retornar uma KEY!
//o pai do PRODUTOCARD é a section *




      