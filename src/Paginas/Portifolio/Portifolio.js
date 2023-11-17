import React from "react";
import GaleriaImagens from "../../Components/galeriaImagem";
import { HeaderFixo } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"
import Bchat from "../../Components/chat/Bchat";





export const Portifolio = () =>{
    
 
    
    
    return(
    <div>
     <HeaderFixo></HeaderFixo>
             
        
       
            <div>
                <Bchat/>
                <GaleriaImagens />
            </div>
            <Footer></Footer>
    </div>
    )
}