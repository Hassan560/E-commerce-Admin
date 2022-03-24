import firebase from 'firebase/compat/app'
import firebaseConfig from './Firebase'
import 'firebase/compat/auth';
import "firebase/compat/firestore";

firebase.initializeApp(firebaseConfig)

let auth = firebase.auth()
let db = firebase.firestore()

export { auth, db }