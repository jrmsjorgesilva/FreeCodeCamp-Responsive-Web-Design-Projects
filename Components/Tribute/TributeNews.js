import React, { useState, useEffect } from 'react';
import styles from '../../styles/css/TributeContent.module.css';
import Swal from 'sweetalert2'

const TributeNews = () => {

    const [input, setInput] = useState(() => null)

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const sendMail = (e) => {

        e.preventDefault();

        if (!input) {
            Swal.fire({
                title: 'Campos não preenchidos!',
                text: 'Preencha o campo antes do envio',
                icon: 'error',
                confirmButtonText: 'Preencher Email'
            })
            return
        }

        if (!input.includes('@') || !input.includes('.com')) {
            Swal.fire({
                title: 'Email inválido!',
                text: 'É preciso preencher com um email válido',
                icon: 'error',
                confirmButtonText: 'Preencher Email'
            })
            return
        }

        Swal.fire({
            icon: 'success',
            title: 'Obrigado por se inscrever!',
            showConfirmButton: false,
            timer: 1500
          })

    }

    return (
        <section
            id='tribute__section__news'
            className={styles.tribute__section__news}
        >
            <form
                className={styles.form__control}
                onSubmit={(e) => sendMail(e)}
            >
                <input
                    type='text'
                    placeholder='Mande noticias'
                    value={input}
                    onChange={(e) => handleInput(e)}
                />
                <button
                    type='submit'
                    className={styles.btn__form}
                    onClick={() => {}}
                >
                    Enviar &rarr;
                </button>
            </form>
        </section>
    )
}

export default TributeNews