import { action, observable, toJS } from 'mobx'
import storejs from 'store'
import _ from 'lodash'
import { auth , firebase } from '../firebase/index'
import axios from 'axios'

let store = null

class AuthStore {

  @observable job_positions = null

  constructor(isServer) {
    this.job_positions = storejs.get('job_positions')
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