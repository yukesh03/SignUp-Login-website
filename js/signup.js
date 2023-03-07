// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
//import { getDatabase } from "https://login2logout-1d053-default-rtdb.firebaseio.com/";
import { getDatabase, set , ref} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD93DGDksMHcb3wzLq7naAl-htiCjM5aoA",
    authDomain: "login2logout-1d053.firebaseapp.com",
    databaseURL: "https://login2logout-1d053-default-rtdb.firebaseio.com",
    projectId: "login2logout-1d053",
    storageBucket: "login2logout-1d053.appspot.com",
    messagingSenderId: "187345031916",
    appId: "1:187345031916:web:055b3f0665c159a42a0bc9",
    measurementId: "G-P13G66CDF0"
    };
    
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase();
    const auth = getAuth();

    signUp.addEventListener('click',(e) => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user.uid)
        set(ref(database, "Userslist/" + user.uid), {
        email: email,
        password: password
        
    })

    alert("User Created!")
    location.replace("login.html");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    // ..
    });
    

});


