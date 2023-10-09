import React from 'react';
import styled from 'styled-components';

// Importa as imagens manualmente
import imagem1 from '../Assents/foto1.jpg';
import imagem2 from '../Assents/imagem1.jpg';
import imagem3 from '../Assents/img1.jpg';
import imagem4 from '../Assents/img10.jpg';
import imagem5 from '../Assents/img2.jpg';
import imagem6 from '../Assents/img3.jpg';
import imagem7 from '../Assents/img5.jpg';
import imagem8 from '../Assents/img6.jpg';
import imagem9 from '../Assents/img7.jpg';
import imagem10 from '../Assents/img8.jpg';
import imagem11 from '../Assents/img9.jpg';
import imagem12 from '../Assents/foto1maior.jpg';

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12];  // Adicione mais imagens conforme necessário

const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Imagem = styled.img`
  width: calc(25% - 20px);  // 25% para garantir 4 imagens por fileira com margens
  margin: 10px;
  box-sizing: border-box;
`;

const GaleriaImagens = () => {
  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <GaleriaContainer>
        {imagens.map((imagem, index) => (
          <Imagem key={index} src={imagem} alt={`foto ${index}`} />
        ))}
      </GaleriaContainer>
    </div>
  );
};

export default GaleriaImagens;
