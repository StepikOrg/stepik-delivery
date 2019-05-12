import * as types from '../types'

import DeliveryService from '@/services/DeliveryService'

const state = {
  profile: {},
}

const getters = {
  profile: state => state.profile,
}

const actions = {
  async getProfile ({ commit }) {
    try {
      const response = await DeliveryService.getProfile()
      commit(types.SET_PROFILE, response)
    } catch (e) {
      commit(types.SET_PROFILE, null)
    }
  }
}

const mutations = {
  [types.SET_PROFILE] (state, profile) {
    state.profile = profile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
