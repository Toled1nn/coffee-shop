import React, { useState, useRef } from 'react';
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
  const accelerateTimeoutRef = useRef(null);
  const decelerateTimeoutRef = useRef(null);
  let currentSpeed = animationDuration;
  const maxSpeed = 200;
  const minSpeed = 3000;
  const step = 2;
  const tempo = 1;

  const handleMouseEnter = () => {
    if (!isMouseInside) {
      setIsMouseInside(true);
      handleColorChange('yellow');
      console.log("MOUSE IN: ", animationDuration);
    }
  };

  const handleMouseLeave = () => {
    if (isMouseInside) {
      setIsMouseInside(false);
      handleColorChange('blue');
      console.log("MOUSE IN: ", animationDuration);
    }
  };
  

  const handleColorChange = (color) => {
    try {
      switch (color) {
        case 'blue':
          setLogoAndTextColor({
            logoImage: logo,
            textColor: '#61dafb',
          });
          
          const decelerate = () => {
            clearTimeout(accelerateTimeoutRef.current);
            if (currentSpeed < minSpeed) {
              currentSpeed += step;
              if (currentSpeed > minSpeed) {
                currentSpeed = minSpeed;
              }
              setAnimationDuration(currentSpeed);
              decelerateTimeoutRef.current = setTimeout(decelerate, tempo);
            }
          };
      
          decelerate();          
          break;
  
        case 'yellow':
          setLogoAndTextColor({
            logoImage: logo2,
            textColor: 'yellow',
          });        
          const accelerate = () => {
            clearTimeout(decelerateTimeoutRef.current);
            if (currentSpeed > maxSpeed) {
              currentSpeed -= step;
              if (currentSpeed < maxSpeed) {
                currentSpeed = maxSpeed;
              }
              setAnimationDuration(currentSpeed);
              accelerateTimeoutRef.current = setTimeout(accelerate, tempo);
            }
          };
            
          accelerate();
          break;
  
        default:
          console.log('Cor não suportada.');
          break;
      }
    } catch (error) {
      console.log('Falha ao trocar cores.');
    }
  };
  
  return (

    <div className="logotipo"> 
      <div className={`logo-container ${size}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <div className="image-container ">
          <img src={logoAndTextColor.logoImage} alt="Logo" className="logo" style={{ animationDuration: `${animationDuration}ms` }} />
          <img src={cafe} alt="Cafe" className="cafe" />
        </div>

        <div className="text-container">
          <span className="logo-text" style={{ color: logoAndTextColor.textColor }}>
            Coffee-Shop Tia Rosa
          </span>
        </div>        
      </div>
    </div>
  );
}

export default LogoNavBar;
