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
      margin-right: 20px;
   }

   ul li a {
      font-size: 1vw;
      text-transform: uppercase;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
   }

   ul li a:hover {
      text-decoration: underline;
   }

   header {
      margin: 10px;
   }
`;

export const Section = styled.section`
   width:80%;  
   background-color: #fff;
   border: 1px solid #ddd;
   border-radius: 8px;
   box-shadow: 2px 10px 10px rgba(0, 0, 5, 0.1);
   
   margin:20px;
   padding:10px;
   
`;

export const DivFundo = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   
   padding:50px;        
   font-family: Arial, sans-serif;
   background-color: black;   
   
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
