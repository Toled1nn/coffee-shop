import React from 'react';
import './SobreNos.css';
import cafe3 from '../Images/cafe3.jpg';
import NavBar from '../Components/NavBar.js';
import './SobreNos.css'; 
import Capitulo from '../Components/Capitulo';



function SobreNos() {
  return (
    <div className="SobreNos">

      <div className="header-block">
          <NavBar />
      </div>

      <div className="imagem-cafe">
        <img src={cafe3} alt="Background" />

      </div>
      <div className="capitulos-container">
          <Capitulo />
      </div>

        

    </div>
);
}

export default SobreNos;
