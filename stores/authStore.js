import { action, observable, toJS } from 'mobx'
import storejs from 'store'
import _ from 'lodash'
import auth from '../firebase'
import axios from 'axios'

let store = null

class AuthStore {

  @observable accessToken = null
  @observable currentUser = null
  @observable userData = null

  constructor(isServer) {
    this.accessToken = storejs.get('accessToken')
    this.currentUser = storejs.get('currentUser')
    this.userData = storejs.get('userData')
  }

  @action createUser(data , idcard){
    auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(response => {
      const url = 'http://localhost:4000/user'
      axios.post(url , {
        firstname : data.firstName,
        lastname : data.lastName,
        email : data.email,
        password : data.password,
        idcard : idcard
      })
      .then( res => {
        const url = `http://localhost:4000/user/alldata/${data.email}`
        axios.get(url)
        .then( resp => {
          storejs.set('currentUser' , response.user)
          storejs.set('idcard', idcard)
          storejs.set('accessToken', response.user.uid)
          storejs.set('userData', resp.data)
          return window.location.href = '/'
        })
        .catch( err => console.log(err))
      })
      .catch( err => {
          console.log(err);
      })
    })
    .catch(error => {
        alert(error.message)               
    })
  }

  @action async login(response,email){    
    storejs.set('accessToken', response.user.uid);
    storejs.set('currentUser', response.user);
    const url = `http://localhost:4000/user/alldata/${email}`
    const res = await axios.get(url)
    if (res) {
      storejs.set('userData', res.data);      
    }
  }

  @action async logout(){    
    let response = await auth.signOut()
    storejs.set('accessToken',null);
    storejs.set('currentUser', null);
    storejs.set('userData', null);
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