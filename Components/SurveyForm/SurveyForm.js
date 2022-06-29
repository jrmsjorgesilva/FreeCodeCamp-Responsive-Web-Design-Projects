// states 
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// components
import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';
import Button from '../Button'
// libs
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { uuid } from 'uuidv4';
// styles
import styles from '../../styles/css/SurveyForm.module.css';
// firebase
import firebaseApp from '../Database/firebase';
import { 
    getDatabase, 
    ref, 
    set as firebaseSet
} from "firebase/database";


const SurveyFormContent = ({ setFormToComplete, setPersona }) => {

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const router = useRouter();

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

    const setFirebaseFormData = (formData) => {
        const db = getDatabase();
        firebaseSet(ref(db, 'Form_Data_' + formData.email.replace('.com', '')), {
            ...formData
        });
    }

    const onSubmit = (formData) => {
        // e.preventDefault();
        console.log('errors', formData);

        setFirebaseFormData(formData);

        // router.push('/offer');
        setFormToComplete(false);
        setPersona(formData.userSituation);
        console.log('fdsgdfgdfg', formData.userSituation);

        return;
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
                    register={register}
                    registerTitle={'name'}
                    errors={errors}
                    inputLabel={'Nome'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'name'}
                    placeholder={'Nome completo'}
                    anyError={errors.name}
                    styleError={styles.form__errors}
                    contentError={'É necessário preencher o nome completo'}
                />

                <Input
                    register={register}
                    registerTitle={'email'}
                    errors={errors}
                    inputLabel={'Email'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'email'}
                    placeholder={'Melhor email'}
                    anyError={errors.email}
                    styleError={styles.form__errors}
                    contentError={'É necessário preencher um email válido'}
                />

                <Input
                    register={register}
                    registerTitle={'idade'}
                    errors={false}
                    anyError={false}
                    inputLabel={'Idade (opcional)'}
                    styleLabel={styles.form__label}
                    styleInput={styles.form__input}
                    inputType={'number'}
                    placeholder={'Idade'}
                />

                <Select
                    register={register}
                    registerTitle={'userSituation'}
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
                            {...register('recommendYes')}
                        />
                        Sem dúvida
                    </div>
                    <div>
                        <input
                            className={styles.form__radio}
                            type="radio"
                            value="maybe"
                            name="recommend"
                            {...register('recommendMaybe')}
                        />
                        Poderia considerar
                    </div>
                    <div>
                        <input
                            className={styles.form__radio}
                            type="radio"
                            value="no"
                            name="recommend"
                            {...register('recommendNo')}
                        />
                        Nem que a vaca tussa
                    </div>
                </label>

                <Select
                    register={register}
                    registerTitle={'favoriteCourse'}
                    optionValues={optionFavoriteCourse}
                    styleLabel={styles.form__label}
                    labelTitle={'Qual sua matéria favorita no FreeCodeCamp?'}
                    styleSelect={styles.form__select}
                />

                <TextArea
                    register={register}
                    registerTitle={'message'}
                    styleLabel={styles.form__label}
                    labelTitle={'Você recomendaria Jorge Machado para alguma empresa?'}
                    styleTextArea={styles.form__textarea}
                    textRows={6}
                    placeholder={'Descreva suas impressões dele aqui'}
                />

                <label className={styles.form__label}>
                    Que features da nossa plataforma você gostaria de ver melhoradas?
                    <div>
                        <input
                            className={styles.form__checkbox}
                            type="checkbox"
                            value="yes"
                            name="improvements"
                            {...register('improveCourses')}
                        />
                        Mais Cursos
                    </div>
                    <div>
                        <input
                            className={styles.form__checkbox}
                            type="checkbox"
                            value="yes"
                            name="improvements"
                            {...register('improveChallenges')}
                        />
                        Mais Desafios
                    </div>
                    <div>
                        <input
                            className={styles.form__checkbox}
                            type="checkbox"
                            value="yes"
                            name="improvements"
                            {...register('improveTests')}
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