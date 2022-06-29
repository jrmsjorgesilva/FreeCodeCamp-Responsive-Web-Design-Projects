import React, { useState, useEffect } from 'react';
import styles from '../../styles/css/SurveyForm.module.css';
import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';
import Button from '../Button'
import { set, useForm } from 'react-hook-form';
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

    const [optionUserSituation, setOptionUserSituation] = useState(() => [
        {
            content: 'Estudante',
            value: 'student'
        },
        {
            content: 'Trabalho em Tempo Integral',
            value: 'fulltimejob'
        },
        {
            content: 'Estuda em Tempo integral',
            value: 'fulltimelearner'
        },
        {
            content: 'Prefiro Não Informar',
            value: 'prefernottosay'
        },
        {
            content: 'Outro(s)',
            value: 'other'
        },
    ])

    const [optionFavoriteCourse, setOptionFavoriteCourse] = useState(() => [
        {
            content: 'HTML and CSS',
            value: 'frontendjuniordeveloper'
        },
        {
            content: 'Javascript',
            value: 'datastrutures'
        },
        {
            content: 'React JS',
            value: 'frontendseniordeveloper'
        },
        {
            content: 'Node Js',
            value: 'fullstackdeveloper'
        }
    ])

    const [inputName, setInputName] = useState(() => '');
    const [inputEmail, setInputEmail] = useState(() => '');
    const [inputAge, setInputAge] = useState(() => '');

    const [selectUserSituation, setSelectUserSituation] = useState(() => '');
    const [selectFavoriteCourse, setSelectFavoriteCourse] = useState(() => '');

    const [radio, setRadio] = useState(() => 'yes');

    const [textAreaMessage, setTextAreaMessage] = useState(() => '');

    const [checkbox, setCheckbox] = useState(() => 'courses');

    console.log('errors', errors);

    const onSubmit = (formData) => {
        // e.preventDefault();
        console.log('errors', errors);
        return;
    }

    const handleInputName = (e) => {
        setInputName(e.target.value);
        console.log('input', e.target.value);
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
        console.log('input', inputEmail);
    }

    const handleInputAge = (e) => {
        setInputAge(e.target.value);
        console.log('input', inputAge);
    }

    const isRadioSelected = (value) => {
        return radio === value;
    }

    const handleRadio = (e) => {
        setRadio(e.target.value);
    }

    const handleSelectUserSituation = (e) => {
        setSelectUserSituation(e.target.value);
    }

    const handleSelectFavoriteCourse = (e) => {
        setSelectFavoriteCourse(e.target.value);
    }

    const handleTextAreaMessage = (e) => {
        setTextAreaMessage(e.target.value);
        console.log(textAreaMessage);
    }

    const handleCheckBox = (value) => {
        // setCheckbox(value);
    }

    const handleInput = (e) => {
        console.log('seaese');
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
                    input={inputName}
                    handleInput={handleInputName}
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
                    input={inputEmail}
                    handleInput={handleInputEmail}
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
                    input={inputAge}
                    handleInput={handleInputAge}
                    register={register}
                    errors={false}
                    inputLabel={'Idade (opcional)'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'number'}
                    placeholder={'Idade'}
                    inputTitle={'idade'}
                />

                <Select
                    select={selectUserSituation}
                    handleSelect={handleSelectUserSituation}
                    optionValues={optionUserSituation}
                    styleLabel={styles.form__label}
                    labelTitle={'O que melhor descreve a sua situação?'}
                    styleSelect={styles.form__select}
                />

                <label className={styles.form__label}>
                    Você recomendaria o FreeCodeCamp para um amigo?
                    <div>
                        <input
                            className={styles.form__radio}
                            type="radio"
                            value="yes"
                            name="recommend"
                            checked={isRadioSelected('yes')}
                            onChange={handleRadio}
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
                            onChange={handleRadio}
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
                            onChange={handleRadio}
                        />
                        Nem que a vaca tussa
                    </div>
                </label>

                <Select
                    select={selectFavoriteCourse}
                    handleSelect={handleSelectFavoriteCourse}
                    optionValues={optionFavoriteCourse}
                    styleLabel={styles.form__label}
                    labelTitle={'Qual sua matéria favorita no FreeCodeCamp?'}
                    styleSelect={styles.form__select}
                />

                <TextArea
                    styleLabel={styles.form__label}
                    labelTitle={'Você recomendaria Jorge Machado para alguma empresa?'}
                    styleTextArea={styles.form__textarea}
                    textRows={6}
                    onChange={handleTextAreaMessage}
                    placeholder={'Descreva suas impressões dele aqui'}
                />

                <label className={styles.form__label}>
                    Que features da nossa plataforma você gostaria de ver melhoradas?
                    <div>
                        <input
                            className={styles.form__checkbox}
                            type="checkbox"
                            value="courses"
                            name="recommend"
                            onChange={handleCheckBox('courses')}
                        />
                        Mais Cursos
                    </div>
                    <div>
                        <input
                            className={styles.form__checkbox}
                            type="checkbox"
                            value="challenges"
                            name="recommend"
                            onChange={handleCheckBox('challenges')}
                        />
                        Mais Desafios
                    </div>
                    <div>
                        <input
                            className={styles.form__checkbox}
                            type="checkbox"
                            value="tests"
                            name="recommend"
                            onChange={handleCheckBox('tests')}
                        />
                        Provas mais dificeis
                    </div>
                </label>

                <Button
                    styleBtn={styles.form__btn}
                    btnType={'submit'}
                >
                    Enviar &rarr;
                </Button>

            </form>

        </section>
    )
}

export default SurveyFormContent