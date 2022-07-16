import firebase from 'firebase/compat/app'
import firebaseConfig from './Firebase'
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import 'firebase/compat/storage'

firebase.initializeApp(firebaseConfig)

let auth = firebase.auth()
let db = firebase.firestore()
let storage = firebase.storage()

export { auth, db,storage }