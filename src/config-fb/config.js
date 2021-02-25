import Firebase  from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAtIfLxVHu1jYIErDdrhOiw42atRp3p6b8",
    authDomain: "e-gaming-9c7b3.firebaseapp.com",
    databaseURL: "https://e-gaming-9c7b3-default-rtdb.firebaseio.com",
    projectId: "e-gaming-9c7b3",
    storageBucket: "e-gaming-9c7b3.appspot.com",
    messagingSenderId: "118543690140",
    appId: "1:118543690140:web:524dc0eef818f9a4b78059"
};
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

Firebase.initializeApp(firebaseConfig);

export default Firebase;