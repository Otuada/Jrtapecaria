import React from "react";
import {Form, ImagemDeFundo} from "./styled";
import GaleriaImagens from "../../Components/galeriaImagem";
import Cards from "../../Components/Cards/Cards";
import { HeaderFixo } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"
import Bchat from "../../Components/chat/Bchat";

const Banner = require('../../img/banner.jpg');



export const Portifolio = () =>{
    
 
    
    
    return(
    <div >
     <HeaderFixo></HeaderFixo>
             
        <Form>

            <div id="container">
            
                <div className="form-container">
                
                
                    
                    <Cards></Cards>
                    <div className="sc1">
                        <h2>Envie fotos pelo WhatsApp (11) 9.4003-6336 para orçamento rápido</h2>
                        <button id="suo">SOLICITE UM ORÇAMENTO</button>
                    </div>
                    
                </div>
                <div className="form-container">
                    <div className="sc1" id="sc2">
                        <h1>Você vai se surpreender com nossos trabalhos!</h1>
                    <p>A Tapeçaria Incanto é especializada em conserto, limpeza, reforma de estofados reclinável,
                         retrátil e fixo, sofá, poltrona, puff, de acordo com a sua necessidade. Fazemos também lavagem de sofá. 
                        Com grande conhecimento em revestimento de sofás e estofados/restaurações e 
                        confecção de móveis, sofás e estofados.</p>
                    <p>A equipe da Tapeçaria Incanto se propõe a consertar, 
                        higienizar e reformar o estofado da sua residência.
                         Chame a Tapeçaria Incanto, uma empresa com 
                        vasta experiência em reforma de sofás reclináveis, 
                        com atendimento diferenciado e garantia dos serviços prestados.</p>
                    </div>
                    
                    
                </div>
                <div className="form-container">
                    
                    <GaleriaImagens></GaleriaImagens>
                    
                </div>
                
                <Bchat/>
            </div>
            <Footer></Footer>
        </Form>
       
            
    </div>
    )
}