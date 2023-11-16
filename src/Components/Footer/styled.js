import styled from 'styled-components';


export const FooterContainer = styled.footer`
  width:100%;
  background-color: #333;
  color: white;
  padding: 0.5%;
  text-align: center;  
  font-size:1vw;
  margin:0;

  div {
    margin-bottom: 10px;

    a {
      color: #fff;
      margin: 0 10px;
      font-size: 1.5vw;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #00f; 
      }

      @media (max-width: 768px) {
        font-size: 3vw; /* Ajuste o tamanho da fonte para telas menores */
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 3vw; /* Ajuste o tamanho da fonte para telas menores */
  }
  
`;

