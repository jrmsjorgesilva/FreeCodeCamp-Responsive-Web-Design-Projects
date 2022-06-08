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
    Swal.fire({
      title: 'Insira o nome do contratante',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Próximo',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (name) => {

        setInputName(name);

        Swal.fire({
          title: 'Insira seu email de contato',
          input: 'email',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Próximo',
          cancelButtonText: 'Cancelar',
          showLoaderOnConfirm: true,
          preConfirm: (mail) => {

            setInputMail(mail);

            Swal.fire({
              title: 'Fale um pouco mais sobre seu projeto',
              input: 'textarea',
              inputAttributes: {
                autocapitalize: 'off'
              },
              showCancelButton: true,
              confirmButtonText: 'Enviar',
              cancelButtonText: 'Cancelar',
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

      {inputName}
      {inputMail}
      {inputProject}
      </Button >

    </>
  )
}

export default PortfolioForm