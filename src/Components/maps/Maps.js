import React from 'react';
import styled from 'styled-components';



const Maps = () => {
  return (
    <div className="map-container">
       <iframe
        title="Google Maps"
        width="1200"
        height="450"
        
       
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1588986182364!2d-46.8457872!3d-23.598633599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfaa9595a2eaa5%3A0x70092db4dec7f3fa!2sR.%20Belo%20Horizonte%2C%2036%20-%20Vila%20Santo%20Ant%C3%B4nio%2C%20Cotia%20-%20SP%2C%2006708-321!5e0!3m2!1spt-PT!2sbr!4v1700272196773!5m2!1spt-PT!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    
    
  );
};

export default Maps;
