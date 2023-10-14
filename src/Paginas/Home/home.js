import React from "react"
import { useNavigate } from "react-router-dom"
import { goToContanto, goToSobre, goToPortifolio } from "../../Routes/Coordinator"
import { DivBotoes, DivFundo, DivHeader,Section} from "./styled"
import GaleriaImagens from "../../Components/galeriaImagem"




export const Home = () =>{
    
    const navigate = useNavigate()
    
    const toContato = () =>{
        goToContanto(navigate)
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
                <li ><a onClick={toContato}>Contato</a></li>
                <li ><a onClick={toSobre}>Jr Tapeçaria</a></li>
                <li ><a onClick={goToPortifolio}>Portifolio</a></li>                                       
            </ul>                 
        </nav>
             
        
        </DivBotoes>
        </DivHeader>
        
        <Section>
          
          <section>
            <h3>🛋 JR Tapeçaria - Três Décadas de Excelência em Estofados Residenciais 🛋</h3>
            <div id="cartao">
              
            <p className="card">Dê vida aos seus estofados com a perícia de uma equipe que acumula mais de trinta
               anos de experiência! Na JR Tapeçaria, dedicamo-nos a fornecer
               serviços de excepcional qualidade, incluindo0:
            </p> 
            
            <p className="card">✨ Reforma de Sofás, Cadeiras e Poltronas: Especializados em todos os modelos 
                e dimensões, inclusive para Sofás e Poltronas Plenitude.
            </p>
            <p className="card">🚿 Lavagem, Limpeza e Higienização Profunda: Oferecemos uma renovação 
                completa, zelando tanto pelos tecidos quanto pelas espumas.
            </p>
            <p className="card">🛡 Impermeabilização de Tecidos: Salvaguarde seus estofados 
               contra manchas e desgaste.
            </p>
            <p className="card">🛌 Cabeceiras de Cama Sob Medida: Fabricamos cabeceiras
                personalizadas em diversos modelos e dimensões.
            </p>
            <p className="card">💼 Combo Especial "Conserta & Limpa": Restaure o brilho
                do seu estofado com nossos serviços combinados.
            </p>
            {/*}
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
            </p>*/}
            </div>
                     
          
            

          </section>
        </Section>
          
        <Section>  
          <section>
            <GaleriaImagens />

          </section>
          
        </Section>
        
    </DivFundo>
    
    
     
    )
}