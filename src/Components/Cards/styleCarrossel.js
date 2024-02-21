import styled from "styled-components";

export const Card = styled.div`
  .servicos-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }

  .card {
    display: flex;
    
    align-items: center;
    margin: 10px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 20%; 
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
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

 

  #imgHome {
    width: 20%;
    border: none;
    border-radius: 50%;
  }

  #Slide {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
`;
