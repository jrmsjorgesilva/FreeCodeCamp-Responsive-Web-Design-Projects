import React, { useState, useEffect } from 'react';
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
// components
import ListOfStudents from './ListOfStudents';

const ThankYouPage = () => {

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