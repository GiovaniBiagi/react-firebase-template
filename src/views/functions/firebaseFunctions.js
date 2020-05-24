import firebase from 'firebase/app';

export const signInWithEmailAndPassword = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);