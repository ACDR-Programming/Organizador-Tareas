import firebase from "firebase/app";
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDgOaqOynsHFsz2XIY9811asGldqdAJk9U",
    authDomain: "organizador-react-cf4ff.firebaseapp.com",
    databaseURL: "https://organizador-react-cf4ff.firebaseio.com",
    projectId: "organizador-react-cf4ff",
    storageBucket: "organizador-react-cf4ff.appspot.com",
    messagingSenderId: "734117917710",
    appId: "1:734117917710:web:7054709fce4a733b7eb85f"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
 
 export const db = fb.firestore();