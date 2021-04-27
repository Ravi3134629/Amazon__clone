import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR3u-YR4LYOeDuhuGQrKFdUX2-MKxv6wA",
    authDomain: "clone-f66a0.firebaseapp.com",
    projectId: "clone-f66a0",
    storageBucket: "clone-f66a0.appspot.com",
    messagingSenderId: "109508746662",
    appId: "1:109508746662:web:717692ea1ca6e55a180367",
    measurementId: "G-87NXQR223T"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  export {db,auth};