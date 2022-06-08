import React, { useState } from 'react';
import Button from '../Button';
import styles from '../../styles/css/Portfolio.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import Swal from 'sweetalert2'

const PortfolioForm = ({ styleBtn }) => {

  const [inputName, setInputName] = useState(() => '');
  const [inputMail, setInputMail] = useState(() => '');
  const [inputProject, setInputProject] = useState(() => '');

  const openForm = () => {

    const swalStyles = Swal.mixin({
      customClass: {
        title: styles.portfolio__form__title,
        input: styles.portfolio__form__input,
        confirmButton: styles.portfolio__btn,
        cancelButton: styles.portfolio__btn,
        popup: styles.portfolio__form__popup,
        container: styles.portfolio__form__container,
      },
      buttonsStyling: false,
    })

    swalStyles.fire({
      title: 'Insira o nome do contratante',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Avançar',
      showLoaderOnConfirm: true,
      preConfirm: (name) => {

        setInputName(name);

        swalStyles.fire({
          title: 'Insira seu email de contato',
          input: 'email',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Próximo',
          background: 'magenta',
          showLoaderOnConfirm: true,
          preConfirm: (mail) => {

            setInputMail(mail);

            swalStyles.fire({
              title: 'Fale um pouco mais sobre seu projeto',
              input: 'textarea',
              inputAttributes: {
                autocapitalize: 'off'
              },
              showCancelButton: true,
              cancelButtonText: 'Cancelar',
              confirmButtonText: 'Enviar',
              background: 'magenta',
              showLoaderOnConfirm: true,
              preConfirm: (project) => {
                setInputProject(project)
              }
            })
          }
        })
      }
    })
  }

  return (
    <>
      <Button
        onClick={() => openForm()}
        styleBtn={styleBtn}
      >
        CONTRATAR &rarr;
      </Button >
    </>
  )
}

export default PortfolioForm