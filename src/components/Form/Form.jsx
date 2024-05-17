import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      tiefName: '',
      tiefMail: '',
      tiefPassword: '',
    },
  });

  const onSubmit = (values) => {
    console.log('Submit del react hook form: ', values);
  };

  return (
    <form>
      <label htmlFor="tiefName">Ingresa tu Alias:</label>
      <input
        {...register('tiefName', {
          required: true,
        })}
        type="text"
        className="tiefName"
      />
      <label htmlFor="tiefMail">Correo Electrónico:</label>
      <input
        {...register('tiefMail', {
          required: true,
        })}
        type="email"
        className="tiefMail"
      />
      <label
        {...register('tiefPassword', {
          required: true,
        })}
        htmlFor="tiefPassword"
      >
        Contraseña:
      </label>
      <input type="password" className="tiefPassword" />
      <button type="submit">ENVIAR</button>
    </form>
  );
};

export default Form;
