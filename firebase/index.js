import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

module.exports = {
  firebase: firebase,
  database: firebase.database(),
  auth: firebase.auth(),
  ref : firebase.storage().ref()
}
// export default firebase.auth()