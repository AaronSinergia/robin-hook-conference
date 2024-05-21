import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import { onSubmit } from '../../functions/onSubmit';

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      tiefName: '',
      tiefMail: '',
      tiefPassword: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="tiefName">Ingresa tu Alias:</label>
      <input
        {...register('tiefName', {
          required: {
            value: true,
            message: 'Necesitas indicar un Alias para continuar...',
          },
          minLength: {
            value: 3,
            message: 'Necesitas indicar un Alias más largo...',
          },
        })}
        type="text"
        className="tiefName"
      />
      {formState.errors.tiefName ? (
        <p>{formState.errors.tiefName.message}</p>
      ) : null}

      <label htmlFor="tiefMail">Correo Electrónico:</label>
      <input
        type="email"
        className="tiefMail"
        {...register('tiefMail', {
          required: {
            value: true,
            message: 'Necesitas indicar un E-MAIL!!',
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Formato de correo electrónico no válido',
          },
        })}
      />
      {formState.errors.tiefMail ? (
        <p>{formState.errors.tiefMail.message}</p>
      ) : null}

      <label htmlFor="tiefPassword">Contraseña:</label>
      <input
        type="password"
        className="tiefPassword"
        {...register('tiefPassword', {
          required: {
            value: true,
            message: 'Necesitas indicar una contraseña!!',
          },
          minLength: {
            value: 3,
            message: 'Necesitas indicar una Contraseña más larga...',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/,
            message:
              'La contraseña debe tener al menos 8 carácteres, e incluir: una letra mayúscula, una letra minúscula y un número',
          },
        })}
      />
      {formState.errors.tiefPassword ? (
        <p>{formState.errors.tiefPassword.message}</p>
      ) : null}
      <button type="submit" disabled={!formState.isDirty}>
        ENVIAR
      </button>
    </form>
  );
};

export default Form;
