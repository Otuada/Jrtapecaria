import styled from "styled-components";


export const DivBotoes = styled.nav`
   ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
   }

   ul li {
      margin-right: 30px;
   }

   ul li button {
      background-color: #3498db;
      color: #fff;
      padding: 10px 20px;
      font-size: 1vw;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
   }

   ul li button:hover {
      text-decoration: blink;
      background-color: red;
   }

   header {
      margin: 0px;
   }
`;

export const DivHeader = styled.div`
   background-color: #00277A;
   position: fixed;
   top: 0;
   left: 0; 
   right: 0; 
   width: 100%;
   z-index: 100;
   padding: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   color: #fff;
  

   .Image{
      width:5%;
      border: 1px solid #ccc;
      border-radius: 50px;
      cursor: pointer;
      transition: transform 0.2s ease;
   
   }
   .Image:hover{
      transform: scale(1.1); 

   }

  
`;