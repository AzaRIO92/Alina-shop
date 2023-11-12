import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCyX2UkI9lBDcwCV9uZc7nprr1EvVcfUjs",
  authDomain: "azat-js-36.firebaseapp.com",
  projectId: "azat-js-36",
  storageBucket: "azat-js-36.appspot.com",
  messagingSenderId: "41547968369",
  appId: "1:41547968369:web:7f7d2e7a200fba31e590d0"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;