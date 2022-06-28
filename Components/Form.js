import React from 'react'
import styles from '../../styles/css/SurveyForm.module.css';
import { FaTimes, FaInfo, FaExclamationCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Form = ({
  onSubmit,
  input,
  toggle,
  select,
  check,
  handleInput,
  handleSelect,
  handleToggle,
  handleCheck
}) => {


  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <form
      className={styles.form__control}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className={styles.form__label}>
        Nome
        <input
          type='name'
          className={styles.form__input}
          value={input}
          onChange={(e) => handleInput(e)}
          pĺaceholder='Nome completo'
          {...register('name', { required: true })}
        />
        {
          errors.name &&
          <span
            className={styles.form__errors}
          >
            <FaExclamationCircle
              style={{
                color: 'white',
                margin: '0px 5px'
              }}
            />
            É necessário preencher o nome completo
          </span>
        }
      </label>

      <label className={styles.form__label}>
        Email
        <input
          type='email'
          className={styles.form__input}
          value={input}
          onChange={(e) => handleInput(e)}
          pĺaceholder='Melhor email'
          {...register('email', { required: true })}
        />
        {
          errors.email &&
          <span className={styles.form__errors}>
            <FaExclamationCircle
              style={{
                color: 'white',
                margin: '0px 5px'
              }}
            />
            É necessário preencher um email válido
          </span>
        }
      </label>

      <label className={styles.form__label}>
        Idade (opcional)
        <input
          type='number'
          className={styles.form__input}
          value={input}
          onChange={(e) => handleInput(e)}
          pĺaceholder='Idade'
          {...register('idade')}
        />
      </label>

      <label className={styles.form__label}>
        O que melhor descreve a sua situação?
        <select
          className={styles.form__select}
          onChange={(e) => { }}
        >
          <option
            value='student'
          >
            Estudante
          </option>

          <option
            value='fulltimejob'
          >
            Trabalho em Tempo Integral
          </option>

          <option
            value='fulltimelearner'
          >
            Estuda em Tempo integral
          </option>

          <option
            value='prefernottosay'
          >
            Prefiro Não Informar
          </option>

          <option
            value='other'
          >
            Outro(s)
          </option>

        </select>
      </label>

      <label className={styles.form__label}>
        Você recomendaria Jorge Machado para alguma empresa?
        <textarea
          className={styles.form__textarea}
          rows={6}
          placeholder='Descreva suas impressões dele aqui'
        >
        </textarea>
      </label>

      <button
        className={styles.form__btn}
        type='submit'
      >
        Enviar &rarr;
      </button>

    </form>
  )
}

export default Form