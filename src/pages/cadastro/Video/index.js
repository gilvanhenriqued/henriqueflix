import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const [videos, setVideos] = useState([]);

  const valoresIniciais = {
    titulo: '',
    url: '',
  };

  const { handleChange, formValues, clearForm } = useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/');
    console.log('testando');
    setVideos([
      ...videos,
      formValues,
    ]);
    clearForm();
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="Url do vídeo"
          name="url"
          value={formValues.url}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={formValues.categoria}
          onChange={handleChange}
          type="text"
        />

        <Button>
          Enviar Vídeo
        </Button>
      </form>

    </PageDefault>
  );
}

export default CadastroVideo;
