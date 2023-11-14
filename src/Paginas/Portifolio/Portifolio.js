import React from "react";
import GaleriaImagens from "../../Components/galeriaImagem";
import { HeaderFixo } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"





export const Portifolio = () =>{
    
 
    
    
    return(
    <div>
     <HeaderFixo></HeaderFixo>
             
        
       
            <div>
                <GaleriaImagens />
            </div>
            <Footer></Footer>
    </div>
    )
}