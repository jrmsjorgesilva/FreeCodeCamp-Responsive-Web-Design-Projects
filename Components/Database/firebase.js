// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseFetch = async () => {
  const url = 'http://localhost:8000/' || 'https://localhost:8000/';
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    console.log('dentro da funcao', data);
    // return data;
  } catch (err) {
    throw new Error('NÃO FOI POSSIVEL BUSCAR DADOS DO BANCO', err);
  } finally {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: data.apiKey,
      authDomain: data.authDomain,
      projectId: data.projectId,
      storageBucket: data.storageBucket,
      messagingSenderId: data.messagingSenderId,
      appId: data.appId
      // databaseURL: data.databaseURL
    };

    console.log('comparison->', data.apiKey === firebaseConfig.apiKey);

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    return firebaseApp;

  }
}

export default firebaseFetch();

// const firebaseFetchedData = firebaseFetch();
// firebaseFetchedData.then(firebaseFetchedData => {
//   console.log('fora da funcao-> /n FD:', firebaseFetchedData, 'FC:', firebaseConfig);
//   console.log('fora da funcao-> bool comparison ->', firebaseFetchedData.apiKey === firebaseConfig.apiKey);
// })

// alternative syntax for async await promise result
// void async function() {
//   var firebaseFetchedData = await firebaseFetch()
//   console.log(firebaseFetchedData)
// }()