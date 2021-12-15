import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig =
{
    apiKey: "AIzaSyCDAMGqhFnj433wA_Vr0PfX2kZ69FVoLQE",
    authDomain: "redpace-db.firebaseapp.com",
    projectId: "redpace-db",
    storageBucket: "redpace-db.appspot.com",
    messagingSenderId: "640063014623",
    appId: "1:640063014623:web:f9955b718e1b9d17ef0b6a",
    measurementId: "G-XP96MGR8KK"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

