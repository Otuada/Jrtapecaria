import React from "react"
import { Section, H5Titulo, ImgSection, DivCardGrid, DivFundo, SectionContador, DivTxtHistoria, H4Section, PSection,ImagemDeFundo } from "./styled"
import { HeaderFixo } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"
import Bchat from "../../Components/chat/Bchat";
import { Contador } from '../../Components/Contador/contador'
import { Carousel } from '../../Components/Carrossel/carrossel'



export const Home = () =>{
    
    

    return(
      <div>
      <DivFundo></DivFundo>
       <ImagemDeFundo src={require('../../img/sofa5.jpeg')} alt="Sofá" />
       <HeaderFixo></HeaderFixo>
       
        <H5Titulo>Solução para seu conforto</H5Titulo>
        <Section>
          
            <H4Section> JR Tapeçaria - Três Décadas de Excelência em Estofados Residenciais </H4Section>
            <div>
              
            <PSection>Dê vida aos seus estofados com a perícia de uma equipe que acumula mais de trinta
               anos de experiência! Na JR Tapeçaria, dedicamo-nos a fornecer
               serviços de excepcional qualidade, incluindo:
            </PSection> 
             <Carousel/>
            <DivCardGrid>
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
            
            <ImgSection src={require('../../img/sofa2.jpeg')} alt="sofa3"/>
            </DivCardGrid>
            </div>
            
            <div>
        <Bchat/>
            
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
        <SectionContador>
             <Contador limit={3200} message="Clientes satisfeitos" />
             <Contador limit={30} message="anos de experiencia" />
             <Contador limit={1000} message="projetos concluidos" />
             <Contador limit={200} message="moveis artesanais criados" />
        </SectionContador>
          <DivTxtHistoria>
         <p>
         A história da tapeçaria remonta a tempos antigos, tendo
 desempenhado um papel crucial como expressão artística e funcionalidade 
 ao longo das eras. Originada em diferentes culturas ao redor do mundo, 
 a tapeçaria evoluiu de uma forma primitiva de revestimento de paredes 
 para uma manifestação sofisticada de habilidade e criatividade.

Na Idade Média, as tapeçarias eram frequentemente utilizadas para 
adornar castelos e catedrais, contando histórias épicas e retratando cenas
 do cotidiano. Com o Renascimento, a tapeçaria tornou-se ainda mais 
 refinada, incorporando técnicas complexas e padrões intrincados.

Durante os séculos seguintes, a tapeçaria continuou a evoluir, 
adaptando-se às mudanças de estilo e preferências estéticas. No século XX,
artistas modernos começaram a explorar a tapeçaria como meio artístico,
incorporando novos materiais e experimentando com formas abstratas.

Hoje, a tapeçaria mantém sua relevância como uma forma de expressão 
artística, decorativa e funcional, preservando ao longo de sua história 
a tradição e a inovação.
         </p>
            
         </DivTxtHistoria>      
        <Footer></Footer>
        
    
        </div>
     
    )
}