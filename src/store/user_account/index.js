import Vue from 'vue'
import Vuex from 'vuex'

import { SET_CURRENT_ACCOUNT } from './variables/mutations'
import { GET_CURRENT_ACCOUNT } from './variables/actions'
import { GET_ACCOUNT, GET_BALANCE } from './variables/getters'

Vue.use(Vuex)

export const userAccount = {
  state: {
    owner: '',
    movements: [],
    interestRate: 0,
    username: '',
    pin: 0
  },
  mutations: {
    [SET_CURRENT_ACCOUNT]: (state, payload) => {
      Object.assign(state, payload)
    }
  },
  actions: {
    [GET_CURRENT_ACCOUNT]: ({ commit }, payload) => {
      commit(SET_CURRENT_ACCOUNT, payload)
    }
  },
  getters: {
    [GET_ACCOUNT]: state => {
      return state
    },
    [GET_BALANCE]: state => {
      return state.movements.reduce((acc, mov) => acc + mov, 0)
    }
  }
}
