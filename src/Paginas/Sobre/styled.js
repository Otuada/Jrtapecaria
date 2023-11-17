import styled from "styled-components";



export const Section = styled.section`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0px;
  box-shadow: 2px 10px 10px rgba(0, 0, 5, 0.1);
  left: 0; 
  right: 0;
  margin: 0;
  margin-top: 550px;
  position: relative;
  padding: 0;



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
export const TituloH1 = styled.h1`
    
    margin-top: auto;
    text-align: center;
    font-family: 'Dorsa', sans-serif;
    font-size: 100px;
    font-weight: 400;
    color: Black;
`

export const DivFundo = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Arial, sans-serif;
  overflow-x: hidden; /* Para evitar a barra de rolagem horizontal */
  position: relative;
`;
export const DivSinistra = styled.div`
    width: 40%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0px;
  box-shadow: 2px 10px 10px rgba(0, 0, 5, 0.1);
  left: 0; 
  right: 0;
  margin: 0;
  margin-top: 1450px;
  position: relative;
  padding: 0;


`
export const ImagemDeFundo = styled.img`
  width: 100%;
  height: 80vh;
  position: fixed;
  z-index: -1;
`;