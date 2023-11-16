import styled from "styled-components";

export const Card = styled.div`
.servicos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    padding: 20px;
  }
  
  .card {
    display:flex;
    flex-direction: column;
    width: 20%;
    align-items:center;
    margin: 0px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #333;
  }
  
  p {
    color: #666;
  }
  
  .btn-saiba-mais {
    display: inline-block;
    padding: 8px 16px;
    margin-top: 10px;
    text-decoration: none;
    background-color: #007BFF;
    color: #fff;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .btn-saiba-mais:hover {
    background-color: #0056b3;
  }

  img{
    width:50%;
    border: none;
    border-radius:50%;
  }
  
  @media screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
  



`