import { action, observable, toJS } from 'mobx'
import storejs from 'store'
import _ from 'lodash'
import { auth , firebase } from '../firebase/index'
import axios from 'axios'

let store = null

class AuthStore {

  @observable accessToken = null
  @observable currentUser = null
  @observable userData = null
  @observable imageBase64 = null

  constructor(isServer) {
    this.accessToken = storejs.get('accessToken')
    this.currentUser = storejs.get('currentUser')
    this.userData = storejs.get('userData')
    this.imageBase64 = storejs.get('imageBase64')
  }

  @action createUser(data , idcard){
    auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(response => {
      const result = {
        firstname : data.firstName,
        lastname : data.lastName,
        email : data.email,
        password : data.password,
        idcard : idcard,
        role : 'user',
        uid : response.user.uid,
        blacklist : false
      }
      firebase.database().ref('users/' + response.user.uid).set(result)
      storejs.set('currentUser' , response.user)
      storejs.set('idcard', idcard)
      storejs.set('accessToken', response.user.uid)
      storejs.set('userData', result)
      return window.location.href = '/'
      
    })
    .catch(error => {
        alert(error.message)               
    })
  }

  @action async login(response){   
    firebase.database().ref('blacklist')
    .orderByChild('user_id')
    .equalTo(response.user.uid)
    .once("value").then( snapshot => {
      if (snapshot.val()) {
        auth.signOut()
        alert('ไม่สามารถเข้าสู่ระบบได้ เนื่องจากคุณอยู่ในรายชื่อแบล็คลิสต์')
      }
      else{
        storejs.set('accessToken', response.user.uid);
        storejs.set('currentUser', response.user);
        firebase.database().ref('users/' + response.user.uid)
        .once("value").then( snapshot => {
          storejs.set('userData', snapshot.val());
        })
        firebase.database().ref('resume/' + response.user.uid)
        .once("value")
        .then( snapshot => {
          let data = snapshot.val()
          storejs.set('imageBase64', data.imageBase64)
        })
        .catch( err => {
          storejs.set('imageBase64', null)
          return window.location.href = '/'
        })
      }
    })
  }

  @action async logout(){    
    let response = await auth.signOut()
    storejs.set('accessToken',null);
    storejs.set('currentUser', null);
    storejs.set('userData', null);
    storejs.set('imageBase64', null)
    return window.location.href = '/'
  }

}

export default function initAuthStore(isServer) {
  if (isServer) {
    return new AuthStore(isServer)
  } else {
    if (store === null) {
      store = new AuthStore(isServer)
    }
    return store
  }
}