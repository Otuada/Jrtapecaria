import React from 'react';
import {Card} from '../Cards/style'

const Cards = () => {
  const servicosData = [
    {
      title: 'Tapeçaria',
      description: 'Somos especializados em tapeçaria de estofados, reforma de móveis estofados, tapeçaria de sofás, cadeiras e tapeçaria fina.',
      image: require('../../Assents/img2.jpg'),
    },
    {
      title: 'Restauração',
      description: 'Especializada na reforma de cadeira, manutenção de poltronas, substituição dos revestimentos e conserto da base da cadeira.',
      image: require('../../Assents/img6.jpg'),
    },
    {
      title: 'Capas Para Sofás',
      description: 'Confeccionamos capas feitas sob-medida que caem perfeitamente em todos os modelos de sofás, pufs, poltronas e estofados.',
      image: require('../../Assents/img1.jpg'),
    },
    {
        title: 'Cabeceiras',
        description: 'Cabeceira sob medidas para atribuir maior destaque na decoração do seu quarto. Ela decora o ambiente e proporciona mais conforto.',
        image: require('../../Assents/img8.jpg'),
      },
    
  ];

  return (
    <Card>
        <h1>Nossos Serviços</h1>
    <div className="servicos-container">
      
      {servicosData.map((servico, index) => (
        <div key={index} className="card">
        {servico.image && <img src={servico.image} alt={servico.title} />}
          <h2>{servico.title}</h2>
          <p>{servico.description}</p>
          <a href="#" className="btn-saiba-mais">Saiba Mais</a>
        </div>
      ))}
    </div>
    </Card>
    
  );
};

export default Cards;
