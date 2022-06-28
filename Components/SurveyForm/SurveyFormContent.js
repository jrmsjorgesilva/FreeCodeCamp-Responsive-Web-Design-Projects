import React, { useState, useEffect } from 'react';
import styles from '../../styles/css/SurveyForm.module.css';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FaTimes, FaInfo, FaExclamationCircle } from 'react-icons/fa';

const SurveyFormContent = () => {

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [toggle, setToggle] = useState(() => null);
    const [select, setSelect] = useState(() => null);
    const [check, setCheck] = useState(() => 'yes');
    const [input, setInput] = useState(() => null);

    console.log('errors', errors);

    const onSubmit = (formData) => {
        // e.preventDefault();
        console.log('errors', errors);
        return
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const isRadioSelected = (value) => {
        return check === value;
    }

    const handleCheck = (e) => {
        setCheck(e.target.value)
    }

    const handleSelect = (e) => {
        return
    }

    const handleToggle = (e) => {
        return
    }

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
                <Input
                    input={input}
                    handleInput={handleInput}
                    register={register}
                    errors={errors}
                    inputLabel={'Nome'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'name'}
                    placeholder={'Nome completo'}
                    inputTitle={'name'}
                    styleError={styles.form__errors}
                    contentError={'É necessário preencher o nome completo'}
                />

                <Input
                    input={input}
                    handleInput={handleInput}
                    register={register}
                    errors={errors}
                    inputLabel={'Email'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'email'}
                    placeholder={'Melhor email'}
                    inputTitle={'email'}
                    styleError={styles.form__errors}
                    contentError={'É necessário preencher um email válido'}
                />

                <Input
                    input={input}
                    handleInput={handleInput}
                    register={register}
                    errors={false}
                    inputLabel={'Idade (opcional)'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'number'}
                    placeholder={'Idade'}
                    inputTitle={'idade'}
                    styleError={null}
                    contentError={null}
                />

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
                    Você recomendaria o FreeCodeCamp para um amigo?
                    <div>
                        <input
                            className={styles.form__radio}
                            type="radio"
                            value="yes"
                            name="recommend"
                            checked={isRadioSelected('yes')}
                            onChange={handleCheck}
                        />
                        Sem dúvida
                    </div>
                    <div>
                        <input
                            className={styles.form__radio}
                            type="radio"
                            value="maybe"
                            name="recommend"
                            checked={isRadioSelected('maybe')}
                            onChange={handleCheck}
                        />
                        Poderia considerar
                    </div>
                    <div>
                        <input
                            className={styles.form__radio}
                            type="radio"
                            value="no"
                            name="recommend"
                            checked={isRadioSelected('no')}
                            onChange={handleCheck}
                        />
                        Nem que a vaca tussa
                    </div>
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

        </section>
    )
}

export default SurveyFormContent