import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faPen, faComments, faMapMarker  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'; 
import { HeaderFixo } from "../../Components/Header/Header";
import {Form} from "./styled";
import Bchat from "../../Components/chat/Bchat";
import emailjs from 'emailjs-com';
import { Footer } from "../../Components/Footer/Footer"
import Cards from "../../Components/Cards/Cards";
import Maps from "../../Components/maps/Maps";





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

  const sendEmail = async () => {
    try {
      await emailjs.send('service_39lfdwo', 'template_dle28kl', formData, 'NT1-Mf8WQBOZJLd2D');
      console.log('E-mail enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    sendEmail();
    setFormData({});
  
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
    
      <div id='info' className="form-container">
          
        <Cards></Cards>  
      </div>

      <div id='info' className="form-container">
        <h1>Localização</h1>
        <h1>Entre em contato conosco, teremos o maior prazer em atendê-lo.</h1>
      
      <Maps></Maps>
      
      <p><FontAwesomeIcon icon={faMapMarker} style={{ marginRight: '10px', color:'black'  }} /> Endereço: R. Belo Horizonte, 36 - Parque Sao George, Cotia - SP, 06708-230</p>
      
      
      </div>
      
      <div id='info' className="form-container">
        <p><FontAwesomeIcon icon={faPhone } style={{ marginRight: '10px' }}/>Fone: (11) 4702-5169</p>
      <p><FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', color:'green' }} />WhatsApp: 11 000000000</p>
      <p><FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', color:'green'  }}/>WhatsApp: 11 000000000</p>
      <p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color:'blue'  }}/>E-mail: JR Tapeçaria</p>
      </div>

    
    
    
      

         <Bchat></Bchat>
      </div>
     

    
    </Form>         
    <Footer></Footer>
  </div>
    )
}