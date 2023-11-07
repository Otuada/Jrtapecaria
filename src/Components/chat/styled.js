import styled from "styled-components";


export const Chat = styled.button`

@keyframes jump {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-40px); /* Altura máxima do salto */
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
.chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 4vw;
    box-shadow: none;
    transition: transform 0.2s ease;
    animation: jump 4s infinite;

  }
  
  .chat-button:hover {
    background-color: transparent;
    transform: scale(1.5); 
    animation: none;
  }
  
  #icon{   
    color:green;

  }
`