import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyCpmqn1vXA2tu5x14aobZzihp4AhSl7x78",
  authDomain: "edfirebase-5457d.firebaseapp.com",
  databaseURL: "https://edfirebase-5457d.firebaseio.com",
  projectId: "edfirebase-5457d",
  storageBucket: "edfirebase-5457d.appspot.com",
  messagingSenderId: "133350676570"
}

const init = () => firebase.initializeApp(config)

init()
