import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// firebase
import firebaseApp from '../Database/firebase';
import {
  getDatabase,
  ref,
  child,
  get as firebaseGet
} from "firebase/database";
// styles
import styles from '../../styles/css/SurveyForm.module.css';
// libs 
import Swal from 'sweetalert2';
// components
import ListOfStudents from './ListOfStudents';

const ThankYouPage = () => {

  const router = useRouter();

  const [firebaseValueSelected, setFirebaseValueSelected] = useState(() => []);
  const [reportedErrors, setReportedErrors] = useState(() => []);

  useEffect(() => {

    const getFirebaseFormData = async () => {
      try {
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
      } catch (err) {
        setReportedErrors({
          ...reportedErrors,
          err
        });
        Swal.fire({
          icon: 'error',
          title: `Infelizmente não conseguimos concluir a pesquisa. Você será redirecionado(a)`,
          showConfirmButton: false,
          timer: 4000
        });
        setTimeout(() => {
          router.push('/surveyform');
        }, 5000);
      }
    }

    getFirebaseFormData();

  }, []);

  return (
    <section className={styles.form__section}>
      <h1 className={styles.form__title}>
        Obrigado por se Inscrever!
      </h1>
      <p className={styles.form__subtitle}>
        Você agora faz parte do nosso time de colaboradores!
      </p>
      <ListOfStudents firebaseValueSelected={firebaseValueSelected} />
    </section>
  )
}

export default ThankYouPage