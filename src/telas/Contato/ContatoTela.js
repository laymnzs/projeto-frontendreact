import styled from "styled-components"
import { Main } from "./ContatoTela.styled"
import comp from "../../logo/comp.png"
import linkedin from "../../icones/linkedin.png"
import github from "../../icones/github.png"
import email from "../../icones/email.png"



function ContatoTela (props) {
    return (
            <Main>
            <section>
            <div className="contato">
            <h1>Contato </h1>
            </div>
           
            <div className="compra">
             <p>Projeto feito por: Layane Menezes</p>
            <a>Turma: Ammal B</a>
            </div>


            <div class="sociais">
            <div class="icon-email">
             <a href="mailto:layanemnzswork@gmail.com" target="_blank">
             <div class="box">
             <img src={email} width="50px" alt="email" />
            <p>E-mail</p>
             </div>
             </a>
             <a href="mailto:layanemnzswork@gmail.com" target="_blank">
                </a>
              
        </div>
              <div class="icon-github">
                <a href="https://github.com/laymnzs" target="_blank">
               <div class="box">
              <img src={github} width="90px" alt="github" />                                        
           <p>Github</p>
              </div>
             </a>
            <a href="https://github.com/laymnzs" target="_blank">
          </a>

          </div>


            <div class="icon-linkedin">
              <a href="https://www.linkedin.com/in/layane-mnzs/" target="_blank">
           <div class="box">
           <img src={linkedin} width="50px" alt="linkedin"/>
           <p>LinkedIn</p>
           </div>
           </a>
           <a href="https://www.linkedin.com/in/layane-mnzs/" target="_blank">
            </a>
            
            </div>
            </div>


            <div className="astronauta-pc">
            <img src={comp} width="250px" alt="Astronauta" />
            </div>
            </section>
            </Main>



    )
    }
    export default ContatoTela