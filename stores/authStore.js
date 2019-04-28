import { action, observable, toJS } from 'mobx'
import storejs from 'store'
import _ from 'lodash'
import auth from '../firebase'

let store = null

class AuthStore {

  @observable accessToken = null
  @observable currentUser = null

  constructor(isServer) {
    this.accessToken = storejs.get('accessToken')
    this.currentUser = storejs.get('currentUser')
  }

  @action createUser(username,password){
    console.log('create' , username,password);
    auth
    .createUserWithEmailAndPassword(username, password)
    .then(response => {
      console.log(response.user , 'response.user');
      storejs.set('currentUser' , response.user)
      storejs.set('accessToken', response.user.uid);
      return window.location.href = '/'
    })
    .catch(error => {
        console.log(error.message, 'error.message');               
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
    console.log(response , 'logout' , this.accessToken , this.currentUser);
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