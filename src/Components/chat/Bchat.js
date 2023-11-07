import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'; 
import {Chat} from './styled';

const Bchat = () => {

  

  const handleChatButtonClick = () => {
   
    console.log('Abrir chat bot');
  };
  
  return (
    <Chat>
    
    <button className="chat-button" onClick={handleChatButtonClick}>
      <FontAwesomeIcon icon={faWhatsapp} id='icon' />
    </button>
    
    </Chat>
    
  );
};

export default Bchat;
