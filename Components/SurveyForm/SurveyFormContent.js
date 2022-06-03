import React, { useState, useEffect } from 'react'
import styles from '../../styles/css/SurveyForm.module.css'

const SurveyFormContent = () => {

    const [toggle, setToggle] = useState(() => null);
    const [select, setSelect] = useState(() => null);
    const [check, setCheck] = useState(() => null);
    const [input, setInput] = useState(() => null);

    const handleSubmit = () => {

    }

    const handleCheck = () => {

    }

    const handleSelect = () => {

    }

    return (
        <section className={styles.form__section}>
            <h1 className={styles.form__title}>Conteudo do survey form</h1>

        </section>
    )
}

export default SurveyFormContent