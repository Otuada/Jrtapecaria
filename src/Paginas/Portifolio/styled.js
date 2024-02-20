import styled from "styled-components";

export const Form = styled.div`
#container{
   display:flex;
   flex-wrap: wrap;
   align-items: stretch;
   
   padding: 4%;
   margin:auto;
}
.form-container {
   display:flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin: 1% auto;
   padding: 20px;
   border:none;
   border-radius: 5px;
   background-color: #FFFFFF;
   
 }

 h1,h2{
   font-size:2vw;
   text-align: center;
 }

 .sc1{
   display:flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-items:center;
   padding: 20px;
   width:100%;
  
   border:none;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   align-items:center;
   
 }
 .sc1:hover{
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
   background-color:yellow;
 }

 #suo{
   background-color: red;
   color: #fff;
   border: none;
   border-radius: 5px;
   padding: 10px 20px;
   cursor: pointer;
   
 }
 #suo:hover{
   background-color: #0056b3;
 }

 #sc2{
   text-align:justify;
   font-size:1vw;
 }

 .Image{
  width: 100%; /* Define a largura da imagem como 100% do contêiner pai */
  height: 400px; /* Mantém a proporção original da imagem ajustando automaticamente a altura */
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave à imagem */
  transition: transform 0.3s ease-in-out;
  margin:0;
 }
`;




