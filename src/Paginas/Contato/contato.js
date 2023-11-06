import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faPen, faComments } from '@fortawesome/free-solid-svg-icons';
import { HeaderFixo } from "../../Components/Header/Header";
import {Form} from "./styled";

export const Contato =() =>{

  const [formData, setFormData] = useState({});
  const formFields = [
    { name: 'name', label: 'Nome *', type: 'text', icon: faUser  },
    { name: 'email', label: 'E-mail *', type: 'email', icon: faEnvelope },
    { name: 'phone', label: 'Telefone *', type: 'tel', icon: faPhone  },
    { name: 'subject', label: 'Assunto *', type: 'text', icon: faPen },
    { name: 'message', label: 'Mensagem *', type: 'textarea', icon: faComments, customClass: 'message' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor ou realizar alguma ação local.
    console.log(formData);
  };

   
    return(
  <div>
    <HeaderFixo></HeaderFixo>
    <Form>
      <div id='container'> 
      
      <div className="form-container">
        <h1>ENTRE EM CONTATO CONOSCO!</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index} className="form-field">
            <label htmlFor={field.name}>
            <FontAwesomeIcon icon={field.icon} style={{ marginRight: '10px' }} /> 
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className={`input-field ${field.customClass}`}
              required // Campo obrigatório
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Enviar Mensagem Agora</button>
      </form>

    
    </div>
    
      <div id='info'>
      <h1>Nossos Serviços</h1>
      <ul>
        <li>Tapeçaria</li>
        <li>Restauração</li>
        <li>Reforma de Móveis</li>
        <li>Marcenaria Artesanal</li>
      </ul>

      <h1>Informações de Contato</h1>
      <p>Acabamentos de qualidade e excelência no atendimento.</p>
      <p>Endereço: Alameda dos Nhambiquaras, 912, Moema - São Paulo - SP</p>
      <p>Fone: 11 5052-9480</p>
      <p>WhatsApp: 11 94979-1818</p>
      <p>WhatsApp: 11 98292-6363</p>
      <p>E-mail: sac@tapecariacasadoartesao.com.br</p>
    </div>



      </div>
     

    
    </Form>         
    
  </div>
    )
}