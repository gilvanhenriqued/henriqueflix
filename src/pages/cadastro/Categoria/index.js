import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, formValues, clearForm } = useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      formValues,
    ]);
    clearForm();
  }

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((res) => {
        setCategorias(res);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {formValues.titulo}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título da Categoria"
          name="titulo"
          value={formValues.titulo}
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

      <br />
      <br />

    </PageDefault>
  );
}

export default CadastroCategoria;
