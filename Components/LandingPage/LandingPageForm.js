/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import styles from '../../styles/css/LandingPage.module.css';
import flexbox from '../../styles/css/Flexbox.module.css';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Swal from 'sweetalert2';

const LandingPageForm = () => {

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [inputName, setInputName] = useState(() => '');
  const [inputEmail, setInputEmail] = useState(() => '');

  const onSubmit = data => {
    Swal.fire({
      icon: 'success',
      title: `Obrigado por se inscrever, ${data.name}!`,
      showConfirmButton: false,
      timer: 3000
    });

    setInputName(() => '');
    setInputEmail(() => '');

  };

  return (
    <section className={styles.lp__form}>
      <h1 className={styles.headline}>
        Become a <span className={styles.highlight}>reduxer</span>
      </h1>
      <h5 className={styles.sub__headline}>
        Fill up the form and gain &nbsp;
        <span className={styles.highlight}>
          3
        </span>
        &nbsp; months of free subscription!
      </h5>
      <div className={flexbox.row}>
        <div className={flexbox.col__6}>
          <Image
            src='/img_LP/lp-form.png'
            width={350}
            height={350}
          />
        </div>
        <div className={flexbox.col__6}>
          <form
            className={styles.form__CTA}
            onSubmit={handleSubmit(onSubmit)}
          >

            <label className={styles.label__CTA}>
              <input
                className={styles.input__CTA}
                type='text'
                placeholder='Name or nickname'
                value={inputName}
                {...register("name")}
                onChange={(e) => setInputName(() => e.target.value)}
              />
              <p className={styles.form__errors}>{errors.name?.message}</p>
            </label>

            <label className={styles.label__CTA}>
              <input
                className={styles.input__CTA}
                type='email'
                placeholder='Your best email'
                value={inputEmail}
                {...register("email")}
                onChange={(e) => setInputEmail(() => e.target.value)}
              />
              <p className={styles.form__errors}>{errors.email?.message}</p>
            </label>

            <button
              className={styles.lp__btn}
              onClick={() => { }}
            >
              I Wanna Be a Redux Toolkit Dev!
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default LandingPageForm