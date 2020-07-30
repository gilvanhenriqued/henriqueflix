import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
  

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {nomeDaCategoria}</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function handleNomeCategoria(event){
              console.log(nomeDaCategoria);
              console.log(event.target.value);
              setNomeDaCategoria(event.target.value);
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;