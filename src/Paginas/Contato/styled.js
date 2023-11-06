import styled from "styled-components";

export const Form = styled.div`

#container{
   display:flex;
   flex-wrap: wrap;
   align-items: center;
   padding: 60px;
}
.form-container {

   width: 40%;
   margin: 5% auto;
   padding: 100px;
   border: 1px solid #ccc;
   border-radius: 5px;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
 }
 
 .form-field {
   margin-bottom: 10px;
 
 }
 
 label {
   display:block;
   margin-bottom: 5px;
   font-weight: bold;
 }
 
 .input-field {
   width: 100%;
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
 }
 
 .submit-button:hover {
   background-color: #0056b3;
 }

 h1{
   font-size:1.5vw;
 }

 .message{
   padding-bottom: 60px;
 }

 #info{
   font-size:1.6vw;
 }
 
`
 
