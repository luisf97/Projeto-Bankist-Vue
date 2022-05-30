import Vue from 'vue'
import Vuex from 'vuex'

import {
  GET_SCREEN_OPACITY,
  GET_SCREEN_TEXT_CONTENT
} from './variables/getters'
import { SET_SCREEN_DATA } from './variables/mutation'

Vue.use(Vuex)

export const screen = {
  state: {
    textContent: '',
    opacity: 0
  },
  mutations: {
    [SET_SCREEN_DATA]: (state, payload) => {
      Object.assign(state, payload)
    }
  },
  actions: {},
  getters: {
    [GET_SCREEN_TEXT_CONTENT]: state => {
      return state.textContent
    },
    [GET_SCREEN_OPACITY]: state => {
      return state.opacity
    }
  }
}
