import React from "react";
import { HeaderFixo } from "../../Components/Header/Header"
import { Section } from '../Sobre/styled'
import { Footer } from "../../Components/Footer/Footer"


export const Sobre =() =>{
   

    return(
        <div>
            <HeaderFixo></HeaderFixo>
            <Section>
            <h1>Jr Tapeçaria Sobre</h1>
            <h1>Missão</h1>
            <p className="card">Nossa missão é preservar a arte e as técnicas tradicionais na nossa tapeçaria,
                mantendo viva a herança cultural e histórica do nosso trabalho artistico
                 transformando móveis de estilos antigos e contemporanio, para proporcionar
                 mais sofisticação e conforto ao nosso clientes
            </p>
            <h1>Visão</h1>
            <p className="card">Manter o elevado nível de qualidade nos serviços realizados. Manter a tradição e prospectar novos clientes </p>
            <h1>Valores</h1>
            <h3>Foco no Cliente</h3>
            <p className="card">
                Colocar o cliente no centro das decisões, oferecendo-lhe um atendimento
                exclusivo para buscar entender sua nescessidades e alcançar sua satisfação
            </p>
            <h3>Qualidade</h3>
            <p className="card">Comprometimento em oferecer produtos e serviços de alta qualidade</p>
            <h3>Responsabilidade</h3>
            <p className="card">Assumir a Responsabilidade por todas as açoes e dessisões, buscando comprir
                compromissos e prazos estabelicidos
            </p>
            <h3>Sustentabilidade</h3>
            <p className="card">
                Adotar praticas sustentaveis e com responsabilidade, visando minimizar
                o impacto ambiental e contribuir com um futuro mais sustentável
            </p>
            <h3>Paixão pelo artezanato</h3>
            <p className="card">
                Valorizar a tradição e o cuidado artezanal em cada peça, reconhecendo
                o valor das tecnicas manuais
            </p>
            <h3>Empresa familiar</h3>
            <p className="card">
                Empresa familiar consolidada no mercado desde 1989
            </p>
            
            </Section>
         <Footer></Footer>
        </div>
    )
}