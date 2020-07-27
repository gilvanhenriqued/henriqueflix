import React from 'react';
import Logo from '../../assets/img/logoreactflix.png';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="HenriqueFlix logo" />
      </a>
      
      <a className="ButtonLink" href="/">
        Novo Vídeo
      </a>  
    </nav>
  );
}

export default Menu;