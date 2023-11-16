import React from 'react';
import { FooterContainer } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp,faTwitter } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    
    <FooterContainer>
       <div>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        
      </div>
      
      <p>&copy; 2023 Jr. Tapeçaria. Todos os direitos reservados.</p>
    </FooterContainer>
    
  );
};


