import { action, observable, toJS } from 'mobx'
import storejs from 'store'
import _ from 'lodash'
import auth from '../firebase'
import axios from 'axios'

let store = null

class AuthStore {

  @observable accessToken = null
  @observable currentUser = null

  constructor(isServer) {
    this.accessToken = storejs.get('accessToken')
    this.currentUser = storejs.get('currentUser')
  }

  @action createUser(data , idcard){
    auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(response => {
      console.log(response , 'response');
      const url = 'http://localhost:4000/user'
      axios.post(url , {
        firstname : data.firstName,
        lastname : data.lastName,
        email : data.email,
        password : data.password,
        idcard : idcard
      })
      .then( res => {
        console.log(res.data , 'database' , response.user);
        storejs.set('currentUser' , response.user)
        storejs.set('accessToken', response.user.uid);
        return window.location.href = '/'
      })
      .catch( err => {
          console.log(err);
      })
    })
    .catch(error => {
        alert(error.message)               
    })
  }

  @action async login(response){    
    storejs.set('accessToken', response.user.uid);
    storejs.set('currentUser', response.user);
  }

  @action async logout(){    
    let response = await auth.signOut()
    storejs.set('accessToken',null);
    storejs.set('currentUser', null);
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