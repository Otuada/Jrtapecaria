import React from "react"
import { useNavigate } from "react-router-dom"
import { goToContanto, goToSobre, goToPortifolio } from "../../Routes/Coordinator"
import { DivBotoes, DivFundo, DivHeader,Section, FirstBackground, SecondBackground} from "./styled"





export const Home = () =>{
    
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
    return(
      <DivFundo>
      
       <DivHeader>
        <DivBotoes>
          <header>
               <h1>Jr Tapeçaria</h1>
          </header>                       
        </DivBotoes>
        <DivBotoes>
        <nav>          
            <ul>              
                <li ><button  onClick={toSobre}>Jr Tapeçaria</button></li>
                <li ><button  onClick={toPortifolio}>Portifolio</button></li>                                       
                <li ><button  onClick={toContato}>Contato</button></li>
            </ul>                 
        </nav>
             
        
        </DivBotoes>
        </DivHeader>
        
        <Section>
          
          
            <h1>🛋 JR Tapeçaria - Três Décadas de Excelência em Estofados Residenciais 🛋</h1>
            <div id="cartao">
              
            <p className="card">Dê vida aos seus estofados com a perícia de uma equipe que acumula mais de trinta
               anos de experiência! Na JR Tapeçaria, dedicamo-nos a fornecer
               serviços de excepcional qualidade, incluindo0:
            </p> 
            
            <p className="card">01 Reforma de Sofás, Cadeiras e Poltronas: Especializados em todos os modelos 
                e dimensões, inclusive para Sofás e Poltronas Plenitude.
            </p>
            <p className="card">02 Lavagem, Limpeza e Higienização Profunda: Oferecemos uma renovação 
                completa, zelando tanto pelos tecidos quanto pelas espumas.
            </p>
            
            <p className="card">03 Impermeabilização de Tecidos: Salvaguarde seus estofados 
               contra manchas e desgaste.
            </p>
            <p className="card">04 Móveis Sob Medida: Fabricamos móveis
                personalizadas em diversos modelos e dimensões.
            </p>
            <p className="card">05 Combo Especial "Conserta & Limpa": Restaure o brilho
                do seu estofado com nossos serviços combinados.
            </p>
            </div>
            
            <div>
            
            <p className="card">Para uma avaliação rápida e precisa, gentilmente envie
               fotos do seu estofado pelo WhatsApp (11) 9 3937 2281. 
               Estamos estrategicamente situados na Granja Viana e 
               prestamos atendimento em toda a região de Cotia, São Paulo, 
               e arredores, com frota própria e uma equipe altamente 
               qualificada. Comprometemo-nos a oferecer um atendimento 
               exímio, acabamento refinado e um pós-venda ativo, 
               assegurando a satisfação plena dos nossos clientes. 
               Renove seu espaço com a JR Tapeçaria - 
               Sua Tapeçaria de Confiança!
            </p>
            </div>
                     
         
            

        
        </Section>
          
       
        
        </DivFundo>
    
    
     
    )
}