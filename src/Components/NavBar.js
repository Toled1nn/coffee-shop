import React from 'react';
import LogoNavBar from './LogoNavBar';
import './NavBar.css';

function NavBar() {

  return (
    <div className="navbar">
      <div className="navbar-content" >
        <LogoNavBar size="small-size"/>
      </div>
      <div className="navbar-buttons"  style={{ marginRight: '4vw' }}>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="">Sobre Nos</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Cardapio</a></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar;