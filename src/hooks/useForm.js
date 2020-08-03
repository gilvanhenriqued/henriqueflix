/* eslint-disable no-unused-expressions */
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [formValues, setFormValues] = useState(valoresIniciais);

  const [errors, setErrors] = useState({});

  function setValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor,
    });
  }

  function validateCategoria(values) {
    const isShortTitle = values.titulo.length < 4;

    isShortTitle
      ? errors.titulo = 'O título precisa ter mais do que 3 caracteres...'
      : errors.titulo = undefined;

    return errors;
  }

  function validateVideo(values) {
    const validCategories = valoresIniciais.listValidCategories;

    const isShortTitle = values.titulo.length < 4;
    const isValidUrl = values.url.includes('youtu');
    const isValidCategory = validCategories.includes(values.categoria);

    isShortTitle
      ? errors.titulo = 'O título precisa ter mais do que 3 caracteres...'
      : errors.titulo = undefined;

    isValidUrl
      ? errors.url = undefined
      : errors.url = 'O link deve ser de um vídeo do Youtube...';

    isValidCategory
      ? errors.categoria = undefined
      : errors.categoria = 'Escolha uma das categorias da lista...';

    return errors;
  }

  function handleChange(e) {
    const event = e.target;

    // const paginaUrl = window.location.pathname;

    setValue(
      event.getAttribute('name'),
      event.value,
    );
  }

  function clearForm() {
    setFormValues(valoresIniciais);
  }

  return {
    formValues,
    handleChange,
    clearForm,
    errors,
    setErrors,
    validateCategoria,
    validateVideo,
  };
}

export default useForm;
