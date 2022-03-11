import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDBgAKTcncxRf9_i5nF4AOMDhcjTYZ1sJ8',
  authDomain: 'chatbox-app-bc4bf.firebaseapp.com',
  databaseURL: 'https://chatbox-app-bc4bf-default-rtdb.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
