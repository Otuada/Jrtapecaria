import styled from "styled-components";

export const Form = styled.div`

#container{
   display:flex;
   flex-wrap: wrap;
   align-items: stretch;
   
   padding: 10px;
   margin:3% auto;
}
.form-container {
   
   width: 70%;
   margin: 1% auto;
   padding: 20px;
   border: 1px solid #ccc;
   border-radius: 5px;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
 }
 
 .form-field {
   margin-bottom: 10px;
   margin-left: 25%;
  
 
 }
 
 label {
   display:block;
   margin-bottom: 5px;
   font-weight: bold;
 }
 
 .input-field {
   
   width: 70%;
   
   padding: 5px;
   border: 1px solid #ccc;
   border-radius: 3px;
   outline: none;
 }
 
 .submit-button {
   background-color: red;
   color: #fff;
   border: none;
   border-radius: 5px;
   padding: 10px 20px;
   cursor: pointer;
   margin-left: 25%;
 }
 
 .submit-button:hover {
   background-color: #0056b3;
   
 }

 h1{
   font-size:1.8vw;
   text-align: center;
 }

 .message{
   padding-bottom: 60px;
 }

#info{
  font-size:1.5vw;
  
}

 
 
`
 
