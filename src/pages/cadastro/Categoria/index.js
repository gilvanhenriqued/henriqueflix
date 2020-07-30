import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] =  useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('');
  

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
      }}>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={(event) => setNomeDaCategoria(event.target.value)}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria}
            </li>
          )
        })}
      </ul>
      
      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;