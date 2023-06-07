import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdbaIIaU3PV_6oSunZN3P8Mi7TU30u4tQ",
  authDomain: "task-30fd3.firebaseapp.com",
  projectId: "task-30fd3",
  storageBucket: "task-30fd3.appspot.com",
  messagingSenderId: "746629855878",
  appId: "1:746629855878:web:286b10f40abf7f3c9eaf07",
  measurementId: "G-3L6TZT476M",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
