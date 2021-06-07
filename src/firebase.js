import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP2nDzyfWX8ljIfPUlbVljgdWzZEMNuLA",
    authDomain: "pawsin-89129.firebaseapp.com",
    projectId: "pawsin-89129",
    storageBucket: "pawsin-89129.appspot.com",
    messagingSenderId: "766154828662",
    appId: "1:766154828662:web:51ec7b77803337d5142857",
    measurementId: "G-GYTQYCP7YB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth };