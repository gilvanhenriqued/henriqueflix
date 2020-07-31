import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoreactflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  const isCadastroVideo = 'http://localhost:3000/cadastro/video';

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Católicoflix logo" />
      </Link>

      {window.location.href === isCadastroVideo
        ? <Button as={Link} className="ButtonLink" to="/cadastro/categoria">Cadastrar Categoria</Button>
        : <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</Button>}
    </nav>
  );
}

export default Menu;
