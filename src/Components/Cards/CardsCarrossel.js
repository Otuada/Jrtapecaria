import React from 'react';
import Slider from 'react-slick';
import { Card } from '../Cards/styleCarrossel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardsCarrossel = () => {
  const servicosData = [
    {
        
        image: require('../../Assents/img2.jpg'),
      },
      {
        
        image: require('../../Assents/img6.jpg'),
      },
      {
        
        image: require('../../Assents/img1.jpg'),
      },
      {
          image: require('../../Assents/img8.jpg'),
        },
        {
           
            image: require('../../Assents/img8.jpg'),
          },
          {
            
            image: require('../../Assents/img8.jpg'),
          },
          {
            
            image: require('../../Assents/img8.jpg'),
          },
      
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    
  
    
  };

  return (
    <Card>
      <h1>Veja fotos de reforma consertos e limpeza feitas pela Tapeçaria </h1>
      <div id="slide">
           <Slider {...settings}>
        {servicosData.map((servico, index) => (
          <div key={index} className="card">
            {servico.image && <img id="imgHome" src={servico.image} alt={servico.title} />}
            <h2>{servico.title}</h2>
            <p>{servico.description}</p>
          
          </div>
        ))}
      </Slider>
      </div>
   
    </Card>
  );
};

export default CardsCarrossel;
