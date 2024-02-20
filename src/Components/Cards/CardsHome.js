import React from 'react';
import {Card} from '../Cards/styleCardHome'


const CardHome = () => {
  const servicosData = [
    
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
            image: require('../../Assents/img2.jpg'),       
          },

          {
            title:'WWW' ,
            description: "Para uma avaliação rápida e precisa, gentilmente envie fotos do seu estofado pelo WhatsApp (11) 9 3937 2281. Estamos estrategicamente situados na Granja Viana e prestamos atendimento em toda a região de Cotia, São Paulo, e arredores, com frota própria e uma equipe altamente qualificada. Comprometemo-nos a oferecer um atendimento exímio, acabamento refinado e um pós-venda ativo, assegurando a satisfação plena dos nossos clientes. Renove seu espaço com a JR Tapeçaria - Sua Tapeçaria de Confiança!",
            image: require('../../img/sofa2.jpeg'),

          },
     
     
    ]
    

  return (
    <Card>
        <h1>Nossos Serviços</h1>
    <div className="servicos-container">
      
      {servicosData.map((servico, index) => (
        <div key={index} className="card">
        {servico.image && <img id="imgHome" src={servico.image} alt={servico.title} />}
          <h2>{servico.title}</h2>
          <p>{servico.description}</p>
          <a href=" " className="btn-saiba-mais">Saiba Mais</a>
        </div>
      ))}
    </div>
    </Card>
    
  );
};

export default CardHome;
