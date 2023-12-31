import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem1 from '../../img/WhatsApp_Image_2023-11-15_at_11.32.14__2_-removebg-preview (1).png';
import imagem2 from '../../img/WhatsApp_Image_2023-11-15_at_11.32.14__3_-removebg-preview (1).png';
import imagem3 from '../../img/WhatsApp_Image_2023-11-15_at_11.32.15-removebg-preview (1).png';
import imagem4 from '../../img/WhatsApp_Image_2023-11-15_at_11.32.15-removebg-preview (2).png';
import imagem5 from '../../img/WhatsApp_Image_2023-11-15_at_11.32.15-removebg-preview.png';
import imagem6 from '../../img/WhatsApp_Image_2023-11-15_at_11.45.24-removebg-preview.png';
import imagem7 from '../../img/Design sem nome.png';

export const Carousel = () => {
  const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7];

  const settings = {
    dots: true,
    lazyLoad: 'ondemand', // Adicionado para habilitar o lazy loading
    infinite: true,
    arrows: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: "50px", 
  };

  const estiloContainer = {
    paddingBottom: '150px',
  };

  return (
    <div style={estiloContainer}>
      <Slider {...settings}>
        {imagens.map((imagem, index) => (
          <div key={index}>
            <img
              src={imagem}
              alt={`Imagem ${index + 1}`}
              style={{ minHeight: '300px', minWidth: '300px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
