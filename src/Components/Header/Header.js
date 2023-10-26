import React from "react";
import { goToContanto, goToSobre, goToPortifolio, goToHome } from '../../Routes/Coordinator';
import { useNavigate } from "react-router-dom"
import { DivBotoes, DivHeader } from "./styled";


export const HeaderFixo = () =>{


    const navigate = useNavigate()
    
    const toContato = () =>{
        goToContanto(navigate)
    }

    const toPortifolio = () => {
      goToPortifolio(navigate)
    }

    const toSobre = () =>{
        goToSobre(navigate)
    }

    const toHome = () =>{
        goToHome(navigate)
    }
    return (
<div>
    <DivHeader>
    
      
           <img src='../../img/74061e09-1d09-42c2-91c5-470dc9021be8.jpg' alt="Logo Jr" onClick={toPortifolio}/>
                             
    
    <DivBotoes>
    <nav>          
        <ul>              
            <li ><button  onClick={toSobre}>Sobre Nós</button></li>
            <li ><button  onClick={toPortifolio}>Portifolio</button></li>                                       
            <li ><button  onClick={toContato}>Contato</button></li>
        </ul>                 
    </nav>
         
    
    </DivBotoes>
    </DivHeader>
    </div>
    )
} 