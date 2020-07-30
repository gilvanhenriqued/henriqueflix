import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const [categorias, setCategorias] =  useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }

  const [formValues, setFormValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    const event = e.target;

    setValue(
      event.getAttribute('name'),
      event.value
    );
  } 

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      formValues
    ]);
    setFormValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {formValues.nome}</h1>

      <form onSubmit={handleSubmit}>

        <FormField 
          label="Nome da Categoria"
          name="nome"
          value={formValues.nome}
          onChange={handleChange}
          type="text"
        />

        <FormField 
          label="Descrição"
          name="descricao"
          value={formValues.descricao}
          onChange={handleChange}
          type="text"
        />

        <FormField 
          label="Cor da Categoria"
          name="cor"
          value={formValues.cor}
          onChange={handleChange}
          type="color"
        />

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