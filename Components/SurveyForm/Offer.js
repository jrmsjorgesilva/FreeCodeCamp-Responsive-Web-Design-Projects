import React, { useEffect, useState } from 'react'
// firebase
import firebaseApp from '../Database/firebase';
import {
  getDatabase,
  ref,
  child,
  get as firebaseGet
} from "firebase/database";
// libs
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// components
import Input from '../Input';
import Button from '../Button';
// styles
import styles from '../../styles/css/SurveyForm.module.css';

const Offer = ({ persona }) => {

  const [firebaseValueSelected, setFirebaseValueSelected] = useState(() => []);

  useEffect(() => {

    const getFirebaseFormData = async () => {
      const db = getDatabase();
      const dbRef = ref(db);
      firebaseGet(dbRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(Object.values(snapshot.val()).map(item => item.name));
            setFirebaseValueSelected(Object.values(snapshot.val()));
          }

          else {
            throw alert('no data found');
          }
        })
    }

    getFirebaseFormData();

  }, []);

  // FORM 
  const schema = yup.object({
    // objetos do form - validação e erros
    company: yup.string().required(),
    school: yup.string().required()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  // methods
  const onSubmit = (offerData) => {
    console.log('FDSGFDFGDFG', offerData);
  }

  console.log('GREGERTGERTGH', firebaseValueSelected);

  return (
    <section className={styles.form__section}>
      <h1 className={styles.form__title}>
        Conteudo do survey form
      </h1>
      <p className={styles.form__subtitle}>
        Thank you for taking the time to help us improve the platform
      </p>
      <form
        className={styles.form__control}
        onSubmit={handleSubmit(onSubmit)}
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

        <Button
          btnType={'submit'}
          styleBtn={styles.form__btn}
        >
          Quero Participar
        </Button>

      </form>
    </section>
  )
}

export default Offer