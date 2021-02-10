import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkCTgu1w6YaTMg0Kde19_ARnQ17mRqiVE",
    authDomain: "photo-blog-6c04b.firebaseapp.com",
    databaseURL: "https://photo-blog-6c04b-default-rtdb.firebaseio.com",
    projectId: "photo-blog-6c04b",
    storageBucket: "photo-blog-6c04b.appspot.com",
    messagingSenderId: "563285689502",
    appId: "1:563285689502:web:8b90a8ad3cbb494ee7678f",
    measurementId: "G-9CL7EYENMQ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db, auth, storage};