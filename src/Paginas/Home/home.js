import React, { useEffect, useState } from "react";
import {
  Section,
  H5Titulo,
  TituloH1Grid,
  ImgSection,
  DivCardGrid,
  DivFundo,
  SectionContador,
  H4Section,
  PSection,
  ImagemDeFundo
} from "./styled";
import { HeaderFixo } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import Bchat from "../../Components/chat/Bchat";
import { Contador } from '../../Components/Contador/contador'
import { Carousel } from '../../Components/Carrossel/carrossel'
import { InView } from 'react-intersection-observer'
import CardHome from "../../Components/Cards/CardsHome";
import CardsCarrossel from "../../Components/Cards/CardsCarrossel";

export const Home = () => {
  const cardsServico = [
    {
      title: 'Tapeçaria JR: a arte de transformar',
      description: 'Transformamos seus sonhos em realidade, criando móveis personalizados para você. Com a tapeçaria JR, você pode ter o móvel dos seus sonhos, do jeito que você sempre quis. Aqui, você pode escolher o tecido, a cor, o modelo e o tamanho do seu móvel, tudo de acordo com as suas necessidades e desejos Nossos profissionais experientes irão trabalhar com você para garantir que o seu móvel seja perfeito, do começo ao fim.',
    },
    {
      title: 'Tapeçaria JR: a qualidade que você merece',
      description: 'Nossa equipe de profissionais experientes oferece serviços de alta qualidade, garantindo a satisfação de nossos clientes. Com a tapeçaria JR, você pode ter certeza de que o seu móvel será feito com os melhores materiais e técnicas Nossos profissionais são altamente qualificados e experientes, e estão sempre atualizados com as últimas tendências.',
    },
    {
      title: 'Tapeçaria JR: a inovação em movimento',
      description: 'Utilizamos as últimas tecnologias e tendências para criar móveis modernos e confortáveis. Estamos sempre buscando novas maneiras de criar móveis que sejam atemporais e elegantes. Aqui, você pode encontrar móveis que são únicos e inovadores, e que irão se destacar em qualquer ambiente..',
    },
    {
      title: 'Tapeçaria JR: o conforto que você merece',
      description: 'Nossos móveis são feitos com materiais de alta qualidade, garantindo o máximo conforto e durabilidade. Utilizamos tecidos e espumas de última geração, que irão proporcionar o máximo conforto e durabilidade. Nossos móveis são feitos para serem usados por muitos anos, e para manter o seu conforto original.',
    },
    {
      title: ' Tapeçaria JR: a expressão da sua personalidade',
      description: 'Com nossos móveis, você pode expressar sua personalidade e criar um ambiente único. Aqui, você pode encontrar móveis em uma ampla variedade de estilos e cores. Com a tapeçaria JR, você pode criar um ambiente que reflita a sua personalidade e o seu estilo..',
    },
    {
      title: 'Tapeçaria JR: a exclusividade que você procura',
      description: 'Nossos móveis são únicos e personalizados, criados para atender às suas necessidades específicas. Nossos profissionais trabalharão com você para criar o móvel perfeito, do começo ao fim. Com a tapeçaria JR, você pode ter um móvel que é único e exclusivo, e que irá atender às suas necessidades específicas.',
    },
    {
      title: 'Tapeçaria JR: a solução para seus estofados',
      description: 'Oferecemos uma ampla gama de serviços para restaurar ou renovar seus estofados, de acordo com suas necessidades. Podemos reformar, limpar ou impermeabilizar seus estofados, deixando-os como novos. Aqui, você pode encontrar o serviço certo para atender às suas necessidades, seja para restaurar um móvel antigo ou para proteger um móvel novo.',
    },
  ]
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleIntersect = (inView, entry) => {
      if (inView) {
        setScrollY(entry.target.offsetTop);
      }
    };

    const target = document.querySelector(".section");
    if (target) {
      const observer = new InView({
        threshold: 0,
        target,
        root: null,
        onEnter: (entry, observer) => handleIntersect(true, entry),
        onLeave: (entry, observer) => handleIntersect(false, entry),
      });

      observer.observe();

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div>
      <DivFundo></DivFundo>
      <ImagemDeFundo src={require('../../img/sofa5.jpeg')} alt="Sofá" />
      <HeaderFixo></HeaderFixo>

      <H5Titulo>Solução e estilo para seu conforto</H5Titulo>
      <Section>
        <H4Section> JR Tapeçaria - Três Décadas de Excelência em Estofados Residenciais </H4Section>
        <div>
          <PSection>Dê vida aos seus estofados com a perícia de uma equipe que acumula mais de trinta anos de experiência! Na JR Tapeçaria, dedicamo-nos a fornecer serviços de excepcional qualidade, incluindo:</PSection>
          
          <TituloH1Grid
            style={{
              left: `${scrollY}px`,
              transition: "left 0.5s ease-in-out",
              initial: "0px",
            }}
          >Serviços</TituloH1Grid>

         
            <div>
              <CardsCarrossel></CardsCarrossel>
              <CardHome></CardHome>
            </div>
            
       
        </div>

        <div>
          <p className="card"></p>
        </div>
      </Section>
      <SectionContador>
        <Contador limit={3200} message="Clientes satisfeitos" />
        <Contador limit={30} message="anos de experiencia" />
        <Contador limit={1000} message="projetos concluídos" />
        <Contador limit={200} message="móveis artesanais criados" />
      </SectionContador>
      <Bchat></Bchat>
      <Footer></Footer>
    </div>
  )
}
