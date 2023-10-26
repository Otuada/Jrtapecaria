import React from "react";
import GaleriaImagens from "../../Components/galeriaImagem";
import { goToContanto,  goToSobre, goToHome } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { DivBotoes, DivHeader } from "./styled"



export const Portifolio = () =>{
    
    const navigate = useNavigate()
    
    const toContato = () =>{
        goToContanto(navigate)
    }

    const toSobre = () => {
      goToSobre(navigate)
    }

    const toHome = () =>{
        goToHome(navigate)
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
                <li ><button  onClick={toContato}>Contato</button></li>
            </ul>                 
        </nav>
             
        
        </DivBotoes>
        </DivHeader>
        <div>

        </div>
            <div>
                <GaleriaImagens />
            </div>
    </div>
    )
}