import React from 'react';
import './Landing.style.css';
import { Link } from 'react-router-dom';
import imgGame from '../../Components/asets/El APOCALIPSIS de la cultura POP en Instagram.jpg'
import ingresa from '../../Components/asets/Start_Button_PNG_Image__Tech_Style_Start_Button_Element__Blue_Button__Illuminated_Button__Tech_Wind_Button_PNG_Image_For_Free_Download-removebg-preview (1).png'

const LandingPage = () => {
  
  return (
    <div className="container-landing">
      <div className='text'>
        <h2>Explora un universo de juegos sin límites</h2>
        <h4>Rompe con la rutina y conquista nuevos universos</h4>
        <Link to="/home">
          <img src={ingresa} alt="img-game" />
        </Link>
      </div>

      <div className='content-image'>
        <img src={imgGame} alt="img-game" />
      </div>
    </div>
  );
};

export default LandingPage;
