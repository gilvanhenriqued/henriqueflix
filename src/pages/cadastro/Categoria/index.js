/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const {
    handleChange,
    formValues,
    clearForm,
    errors,
  } = useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();

    if (errors.titulo) return;

    setCategorias([
      ...categorias,
      formValues,
    ]);

    const data = {
      titulo: formValues.titulo,
      cor: formValues.cor,
      descricao: formValues.descricao,
    };

    categoriesRepository
      .submitCategory(data)
      .then(() => {
        console.log('Cadastrou! :D');
        history.push('/');
      });

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
        Cadastro Categoria
      </h1>

      <form onSubmit={handleSubmit}>

        {errors.titulo && <span className="formField_error">{errors.titulo}</span>}
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
