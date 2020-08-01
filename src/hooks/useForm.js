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
    // TODO: validate url and category / not permit submit without validade

    const isShortTitle = values.titulo.length < 4;

    isShortTitle
      ? errors.titulo = 'O título precisa ter mais do que 3 caracteres...'
      : errors.titulo = undefined;

    return errors;
  }

  function validateVideo(values) {
    // TODO: validate url and category / not permit submit without validade

    const isShortTitle = values.titulo.length < 4;
    const isUrlValid = values.url.includes('youtu');

    isShortTitle
      ? errors.titulo = 'O título precisa ter mais do que 3 caracteres...'
      : errors.titulo = undefined;

    isUrlValid
      ? errors.url = undefined
      : errors.url = 'O link deve ser de um vídeo do Youtube...';

    return errors;
  }

  function handleChange(e) {
    const event = e.target;

    const paginaUrl = window.location.pathname;

    paginaUrl === '/cadastro/categoria'
      ? setErrors(validateCategoria(formValues))
      : setErrors(validateVideo(formValues));

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
  };
}

export default useForm;
