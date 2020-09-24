import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDXSJbhRLZbtTvUBC23C3-w9OyKHzLrDFA",
    authDomain: "clone-2428d.firebaseapp.com",
    databaseURL: "https://clone-2428d.firebaseio.com",
    projectId: "clone-2428d",
    storageBucket: "clone-2428d.appspot.com",
    messagingSenderId: "599508624602",
    appId: "1:599508624602:web:084e15a12d4b2eaffbf1e3",
    measurementId: "G-SKDNWRHERR"
  };

 const app = firebase.initializeApp(firebaseConfig)
 const db = app.firestore()
 const auth = firebase.auth()

 export { db , auth}