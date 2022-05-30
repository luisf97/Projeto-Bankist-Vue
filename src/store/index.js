import Vue from 'vue'
import Vuex from 'vuex'

import { login } from './login/index'
import { screen } from './screen/index'
import { userAccount } from './user_account/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    screen,
    userAccount
  }
})
