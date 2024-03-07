import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyActu-qdCY43dFX-o5mTJE0RO14jpZdwGA",
    authDomain: "to-do-application-6966d.firebaseapp.com",
    databaseURL: "https://to-do-application-6966d-default-rtdb.firebaseio.com",
    projectId: "to-do-application-6966d",
    storageBucket: "to-do-application-6966d.appspot.com",
    messagingSenderId: "1028323619820",
    appId: "1:1028323619820:web:e8427320aa53761626c6c9",
    measurementId: "G-F575Y2D4DT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = app.firestore();
  export {db}