// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0zaw_t5XfVqhX0nyAFuV_72JrmntP_es",
    authDomain: "cloudyalbum.firebaseapp.com",
    projectId: "cloudyalbum",
    storageBucket: "cloudyalbum.appspot.com",
    messagingSenderId: "832079140889",
    appId: "1:832079140889:web:57a44d9c358bf59ff23288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = firebase.storage()
const firestore = firebase.firestore()

export {
    storage,
    firestore
}