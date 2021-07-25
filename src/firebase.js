import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCEPkoK_WMPorOK2lejJDSr5BUdJUMaXV4",
    authDomain: "beth-whalen-project3.firebaseapp.com",
    projectId: "beth-whalen-project3",
    storageBucket: "beth-whalen-project3.appspot.com",
    messagingSenderId: "216468529199",
    appId: "1:216468529199:web:d61a0e9fc84b7fe9d3e6da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;