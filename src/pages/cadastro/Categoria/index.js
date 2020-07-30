import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] =  useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [formValues, setFormValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor
    });
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;

    setValue(
      getAttribute('name'),
      value
    )
  } 

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {formValues.nome}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          formValues
        ]);
        setFormValues(valoresIniciais);
      }}>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={formValues.nome}
            name="nome"
            onChange={handleChange}
          />
        </label>

        <label>
          Descrição:
          <textarea
            type="text"
            value={formValues.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>

        <label>
          Cor:
          <input
            type="color"
            value={formValues.cor}
            name="cor"
            onChange={handleChange}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
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