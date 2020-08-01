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

  function validate(values) {
    const isShortTitle = values.titulo.length < 4;

    isShortTitle
      ? errors.titulo = 'O título precisa ter mais do que 3 caracteres..'
      : errors.titulo = undefined;

    return errors;
  }

  function handleChange(e) {
    const event = e.target;

    console.log(formValues);

    setErrors(validate(formValues));

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
