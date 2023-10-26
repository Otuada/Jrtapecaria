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
      font-size: 1vw;
      text-transform: uppercase;
      color: #5D561F;
      text-decoration: none;
      cursor: pointer;
   }

   ul li button:hover {
      text-decoration: blink;
   }

   header {
      margin: 20px;
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
   padding: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   color: #fff;
`;