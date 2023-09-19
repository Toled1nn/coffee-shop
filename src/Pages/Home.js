import React from 'react';
import './Home.css'; 
import NavBar from '../Components/NavBar.js';
import Carrossel from '../Components/Carrossel';
import cafe2 from '../Images/cafe2.jpg';

function Home() {
  return (
    <div className="Home">
      <div className="header-block">
        <NavBar />
      </div>

      <div className="carrossel-block">
        <Carrossel />
      </div>

      <div className="imagem-cafe">
      <img src={cafe2} alt="Background" />

      </div>
    </div>

);
}

export default Home;
