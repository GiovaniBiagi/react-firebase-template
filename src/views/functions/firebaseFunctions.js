import firebase from 'firebase/app';

export const signInWithEmailAndPassword = (email, password) => 
    firebase.auth().signInWithEmailAndPassword(email, password);

export const createUserWithEmailAndPassword = (email, password) => 
    firebase.auth().createUserWithEmailAndPassword(email, password);
    
export const resetPassword = (email) => 
    firebase.auth().sendPasswordResetEmail(email);