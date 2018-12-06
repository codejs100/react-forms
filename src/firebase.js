import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCvuhQpcAznieJSkUFjtlZGcABuvX-dutk",
  authDomain: "react-forms-7d610.firebaseapp.com",
  databaseURL: "https://react-forms-7d610.firebaseio.com",
  projectId: "react-forms-7d610",
  storageBucket: "react-forms-7d610.appspot.com",
  messagingSenderId: "790164020698"
};
firebase.initializeApp(config);

const firebaseDb = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebaseDb, googleAuth, firebase };
