import styled from "styled-components";



export const Section = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
  
  
  
  width: 100%; /* Em vez de 50%, para ocupar a largura total */
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 10px 10px rgba(0, 0, 5, 0.1);
  left: 0; 
  right: 0;
  margin: 0;
  margin-top: 150px;
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
    padding: 25px;
    margin: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%; /* Calcula 1/3 da largura menos margens */

    
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
export const DivFundo = styled.body`

    
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









 /*export const DivPrincipal = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  
  
 
  

`;*/

export const H5Titulo = styled.h1`
    color: black;
    margin-top: 200px;

`

export const DivCardGrid = styled.div`

  display: grid;
  grid-column-gap: 70px;
  grid-row-gap: 70px;
  grid-template-columns: repeat(3, 1fr);

`