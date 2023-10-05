import React from "react"
import { useNavigate } from "react-router-dom"
import { goToContanto, goToSobre } from "../../Routes/Coordinator"





export const Home = () =>{
    
    const navigate = useNavigate()
    
    const toContato = () =>{
        goToContanto(navigate)
    }

    const toSobre = () =>{
        goToSobre(navigate)
    }
    return(
       <div>
          <h1>home</h1>
          <button onClick={toContato}>Contato</button>
          <button onClick={toSobre}>Jr Tapeçaria</button>
       </div>
    )
}