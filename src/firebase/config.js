// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import  firebase from 'firebase';

import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDo6SpYLjPHWyNYGKBXFOatDj0iwCP2634",
    authDomain: "firegram-25640.firebaseapp.com",
    projectId: "firegram-25640",
    storageBucket: "firegram-25640.appspot.com",
    messagingSenderId: "957180761140",
    appId: "1:957180761140:web:866ec80256bfce39932661",
    measurementId: "G-V1PBFDQSFD"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore= firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp} ;