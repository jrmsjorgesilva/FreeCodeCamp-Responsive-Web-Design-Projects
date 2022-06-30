import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
// libs
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FaExclamationCircle } from 'react-icons/fa';
// components
import Input from '../Input';
import Button from '../Button';
// styles
import styles from '../../styles/css/SurveyForm.module.css';

const Offer = ({ persona }) => {

  const router = useRouter();

  // FORM 
  const schema = yup.object({
    // objetos do form - validação e erros
    company: persona === 'fulltimejob' ? yup.string().required() : null,
    school: persona === 'fulltimejob' ? null : yup.string().required(),
    terms: yup.boolean().default(false).oneOf([true]),
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // methods
  const offerSubmit = (offerData) => {
    router.push('/thankyoupage');
  }

  return (
    <section className={styles.form__section}>
      <h1 className={styles.form__title}>
        {persona === 'fulltimejob' ? 'Aumente seu Salário!' : 'Temos Bônus para Estudantes!'}
      </h1>
      <p className={styles.form__subtitle}>
        {
          persona === 'fulltimejob'
            ? 'Temos um plano de carreira para desenvolvedores que desejam se desenvolver'
            : 'Temos acesso livre para mais de 1000 serviços exclusivos para estudantes de programação'
        }
      </p>
      <form
        className={styles.form__control}
        onSubmit={handleSubmit(offerSubmit)}
      >

        {persona === 'fulltimejob' ? (
          <Input
            register={register}
            registerTitle={'company'}
            errors={errors}
            inputLabel={'Empresa'}
            styleLabel={styles.form__label}
            styleInput={styles.form__input}
            inputType={'name'}
            placeholder={'Empresa Atual'}
            anyError={errors.company}
            styleError={styles.form__errors}
            contentError={'Por favor, preencha o nome da empresa que trabalha atualmente'}
          />
        ) : (
          <Input
            register={register}
            registerTitle={'school'}
            errors={errors}
            inputLabel={'Instituição de Ensino'}
            styleLabel={styles.form__label}
            styleInput={styles.form__input}
            inputType={'name'}
            placeholder={'Instituição de ensino'}
            anyError={errors.school}
            styleError={styles.form__errors}
            contentError={'Por favor, preencha o nome da instituição que estuda atualmente'}
          />
        )}

        <div style={{ marginRight: 'auto' }}>
          <input
            className={styles.form__checkbox}
            type="checkbox"
            value={true}
            name="terms"
            {...register('terms', { required: true })}
          />
          &nbsp; Li e declaro que Autorizo e aceito os termos de serviço
          {
            errors.terms &&
            <span
              className={styles.form__errors}
            >
              <FaExclamationCircle
                style={{
                  color: 'white',
                  margin: '0px 5px'
                }}
              />
              <br />
              Por favor, aceite os termos de contrato para prosseguir
            </span>
          }
        </div>

        <Button
          styleBtn={styles.form__btn}
          btnType={'submit'}
        >
          Quero Participar
        </Button>

      </form>
    </section>
  )
}

export default Offer