import React from 'react';
import { FooterContainer } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
=======
import { faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
>>>>>>> 25bd87ff1d9c8de958ab681a7524c8fe6908d05f
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
  return (
    
    <FooterContainer>
       <div>
        <a href="https://www.instagram.com/jr_atelietapecaria/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/5511939372281" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        
      </div>
      
      <p>&copy; 2023 Jr. Tapeçaria. Todos os direitos reservados.</p>
     
      <p>Desenvolvido por MobolTechSolutions</p>
    </FooterContainer>
    
  );
};


