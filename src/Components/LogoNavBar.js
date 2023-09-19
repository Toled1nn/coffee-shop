import React, { useState } from 'react';
import cafe from '../Images/cafe.png';
import logo from '../Images/logo.svg';
import logo2 from '../Images/logo2.svg';
import './LogoNavBar.css';

function LogoNavBar({ size = 'normal-size' }) {

  const [logoAndTextColor, setLogoAndTextColor] = useState({
    logoImage: logo,
    textColor: '#61dafb',
  });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(3000); 
  const handleMouseEnter = () => {
    if (!isMouseInside) {
      setIsMouseInside(true);
      handleColorChange('yellow');
      setAnimationDuration(1000); 
    }
  };

  const handleMouseLeave = () => {
    if (isMouseInside) {
      setIsMouseInside(false);
      handleColorChange('blue');
      setAnimationDuration(3000); 
    }
  }

  const handleColorChange = (color) => {
    try {
      switch (color) {
        case 'blue':
          setLogoAndTextColor({
            logoImage: logo,
            textColor: '#61dafb',
          });
          break;

        case 'yellow':
          setLogoAndTextColor({
            logoImage: logo2,
            textColor: 'yellow',
          });

        default:
          console.log('Cor não suportada.');
          break;
      }
    } catch (error) {
      console.log('Falha ao trocar cores.');
    }
  };

  return (
    <div className={`logo-container ${size}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="image-container " >
        
        <img src={logoAndTextColor.logoImage} alt="Logo" className={`logo ${isMouseInside ? 'fast-spin' : ''}`} style={{ animationDuration: `${animationDuration}ms` }}/>

        <img src={cafe} alt="Cafe" className="cafe" />

      </div>

      <div className="text-container">

        <span className="text" style={{ color: logoAndTextColor.textColor }}>
          Coffee-Shop Tia Rosa
        </span>

      </div>

    </div>
  );
}

export default LogoNavBar;
