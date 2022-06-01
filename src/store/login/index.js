import Vue from 'vue'
import Vuex from 'vuex'

import { accounts } from '@/repositories/accounts'
import { LOGIN } from './variables/actions'
import { SET_SCREEN_DATA } from '../screen/variables/mutation'
import { GET_CURRENT_ACCOUNT } from '../user_account/variables/actions'

Vue.use(Vuex)

export const login = {
  state: {
    accounts
  },
  mutations: {},
  actions: {
    [LOGIN]: ({ state, commit, dispatch }, payload) => {
      const currentAccount = state.accounts.find(
        acc => acc.username === payload.username
      )

      if (currentAccount?.pin === Number(payload.pin)) {
        commit(SET_SCREEN_DATA, {
          textContent: currentAccount.owner,
          opacity: 100
        })
      }

      dispatch(GET_CURRENT_ACCOUNT, currentAccount)
    }
  }
}
