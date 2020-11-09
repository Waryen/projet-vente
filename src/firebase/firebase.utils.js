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

export const creerUserProfilDocument = async (userAuth, autreData) => {
    if (!userAuth) return // on quitte si pas de connexion ( null )
    const userRef = firestore.doc('users/WwVEyvVEJccXV4xHnX5e4QIQwdF3')
    const capture = await userRef.get()

    if (!capture.exists) {
        const { displayName, email } = userAuth
        const createAt = new Date()
        try {
          await userRef.set({
            displayName,
            email,
            createAt,
            ...autreData
          })
        } catch (error) {
          console.log("Erreur a la création utilisateur",error.message )
        }
      }

      return userRef

    //console.log(capture)
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
// un document d'une collection
firestore.collection('users').doc('2IeZ1w8hkvfT2I2KXR1n').collection('carteElements').doc('cpRcqWiOYEPi1D7VvRKm')
// ou
firestore.doc('users/2IeZ1w8hkvfT2I2KXR1n/carteElements/cpRcqWiOYEPi1D7VvRKm')
// et une collection complet :
firestore.collection('users/2IeZ1w8hkvfT2I2KXR1n/carteElements')

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const loginAvecGoogle = () => auth.signInWithPopup(provider)
export default firebase