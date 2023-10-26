import styled from "styled-components";



export const Section = styled.section`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 10px 10px rgba(0, 0, 5, 0.1);
  margin: 350px 0 0 0;
  //padding: 0;



.card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: calc(37% - 20px); /* Calcula 1/3 da largura menos margens */
  font-size: 19px; /* Tamanho da fonte */
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: #00277A;
  color: #fff;
}
`

export const BodyFundo = styled.div`

    
    background-image: url('../../img/3ded0ee9-29ec-4298-812b-75ed7582f2cf.jpg');
          
    background-attachment: fixed;
    background-position: center center;     
    margin: 0;
    padding: 0;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;   
   padding:70px;        
   font-family: Arial, sans-serif;      
   margin: 0;
   

   
   
`;

export const DivHeader = styled.div`
   background-color: #00277A;
   position: fixed;
   top: 0;
   width: 100%;
   z-index: 100;
   padding: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   color: #fff;
`;

export const FirstBackground = styled.div`//teste
  background-image: url('../../img/sofa5.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  height: 100vh;
  width: 50%; /* Dividindo a tela ao meio horizontalmente */
  position: fixed;
  z-index: -1;
`;


export const SecondBackground = styled.div`//teste 
  background-image: url('../../img/qmaxlb_bfb7a8ecd23448fa37210dc0deb29936fbd09769.jpg'); // Substitua com o caminho da sua segunda imagem
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  height: 100vh;
  width: 50%; /* Dividindo a tela ao meio horizontalmente */
  position: fixed;
  z-index: -2;
`;
