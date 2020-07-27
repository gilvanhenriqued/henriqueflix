import React from 'react';
import Logo from '../../assets/img/logoreactflix.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="HenriqueFlix logo" />
      </a>
      
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;