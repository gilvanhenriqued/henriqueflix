import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, formValues, errors } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriasRes) => {
        setCategorias(categoriasRes);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (errors.titulo || errors.url) return;

    // eslint-disable-next-line arrow-body-style
    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === formValues.categoria;
    });

    const data = {
      titulo: formValues.titulo,
      url: formValues.url,
      categoriaId: categoriaEscolhida.id,
    };

    videosRepository.submitVideo(data)
      .then(() => {
        console.log('Cadastrou! :D');
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>

        {errors.titulo && <span className="formField_error">{errors.titulo}</span>}
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handleChange}
        />

        {errors.url && <span className="formField_error">{errors.url}</span>}
        <FormField
          label="Url do vídeo"
          name="url"
          value={formValues.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={formValues.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Enviar Vídeo
        </Button>
      </form>

      <br />
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;
