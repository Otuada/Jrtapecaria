import styled from "styled-components";

export const Form = styled.div`

#container{
   display:flex;
   flex-wrap: wrap;
   align-items: stretch;
   
   padding: 2%;
   margin:5% auto;
}
.form-container {
   
   width: 100%;
   margin: 1% auto;
   padding: 20px;
   border:none;
   border-radius: 5px;
   background-color: #FFFFFF;
   
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
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:1.2vw;
  
}


img{
  width:cover;
}



 
`
 
