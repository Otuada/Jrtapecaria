import React from "react";
import { goToSobre, goToHome, goToPortifolio } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { DivBotoes, DivHeader } from "./styled"

export const Contato =() =>{

    const navigate = useNavigate()
    
   
    const toSobre = () => {
      goToSobre(navigate)
    }

    const toHome = () =>{
        goToHome(navigate)
    }

    const toPortifolio = () => {
        goToPortifolio(navigate)
      }

    return(
        <div>
            <DivHeader>
        <DivBotoes>
          <header>
               <h1>Jr Tapeçaria</h1>
          </header>                       
        </DivBotoes>
        <DivBotoes>
        <nav>          
            <ul>              
                <li ><button  onClick={toHome}>Home</button></li>
                <li ><button  onClick={toSobre}>Sobre nós</button></li>                                       
                <li ><button  onClick={toPortifolio}>Portifolio</button></li>
            </ul>                 
        </nav>
             
        
        </DivBotoes>
        </DivHeader>
            <div>
                
            </div>
        </div>
    )
}