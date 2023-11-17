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
  margin-top: 190px;
  position: relative;
  padding: 0;

 
 
  #cartao{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  
  }
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

    
    font-size: 100%; /* Tamanho da fonte */
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #00277A;
    color: #fff;
   
  }


  .contato{
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5%;
    margin: 1%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    
    font-size: 100%; /* Tamanho da fonte */
  }
  .contato:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #00277A;
    color: #fff;
  }

  h1{
    color: white;
  }

  @media screen and (min-width: 768px) {
    /* A partir de 768px de largura, aplicar as seguintes regras */
    .card {
      width: calc(33.3333% - 20px); /* Para telas maiores, 3 cartões por linha */
    }
  }
  
  @media screen and (min-width: 1024px) {
    /* A partir de 1024px de largura, aplicar as seguintes regras */
    .card {
      width: calc(85% - 2px); /* Para telas ainda maiores, 4 cartões por linha */
    }
  }


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

export const ImagemDeFundo = styled.img`
  width: 100%;
  height: 100%; /* Para manter a proporção da imagem */
  position: fixed;
  z-index: -1;
`;


export const H5Titulo = styled.h1`
    
    margin-top: 200px;
    text-align: center;
    font-family: 'Dorsa', sans-serif;
    font-size: 100px;
    font-weight: 400;
    color: yellow;
   
    
`
export const ImgSection = styled.img`
   width: 150px; /* Ajuste conforme necessário */
   height: auto;

`

export const DivTxtHistoria =  styled.div`
    background-color: brown;



`

export const H4Section = styled.h4`
       text-align: center;

`
export const PSection = styled.p`
      font-size: 3em;

`

export const DivCardGrid = styled.div`

  display: grid;
  grid-column-gap: 70px;
  grid-row-gap: 70px;
  grid-template-columns: repeat(3, 1fr);

`