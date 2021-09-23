import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyA9JmLc-R8Xz_6oilAfU-I1a_b8e5m4iZ8",
    authDomain: "goal-setting-app-bbeca.firebaseapp.com",
    projectId: "goal-setting-app-bbeca",
    storageBucket: "goal-setting-app-bbeca.appspot.com",
    messagingSenderId: "1089040817952",
    appId: "1:1089040817952:web:d10157ee1094fee7008145"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
