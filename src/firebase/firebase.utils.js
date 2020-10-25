import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAx_EtdwUPC2KK7irMqq3ecGybYDzJItW0",
    authDomain: "projet-vente-23503.firebaseapp.com",
    databaseURL: "https://projet-vente-23503.firebaseio.com",
    projectId: "projet-vente-23503",
    storageBucket: "projet-vente-23503.appspot.com",
    messagingSenderId: "625846884040",
    appId: "1:625846884040:web:f99b250ca0a68cd92ab7fd",
    measurementId: "G-2JR2CM9FLK"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const loginAvecGoogle = () => auth.signInWithPopup(provider)
export default firebase