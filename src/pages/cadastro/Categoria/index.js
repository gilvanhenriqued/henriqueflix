import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

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
      event.value,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      formValues,
    ]);
    setFormValues(valoresIniciais);
  }

  useEffect(() => {
    const URL_BASE = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://catolicoflix.herokuapp.com/categorias';
    fetch(URL_BASE)
      .then(async (res) => {
        const data = await res.json();
        setCategorias([...data]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {formValues.nome}
      </h1>

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
          type="textarea"
        />

        <FormField
          label="Cor"
          name="cor"
          value={formValues.cor}
          onChange={handleChange}
          type="color"
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
