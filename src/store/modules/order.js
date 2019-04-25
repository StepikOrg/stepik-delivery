import * as types from '../types'

const state = {
  orderMeals: []
}

const getters = {
  orderMeals: state => state.orderMeals
}

const mutations = {
  [types.ADD_MEAL] (state, meal) {
    state.orderMeals.push(meal)
  }
}

export default {
  state,
  getters,
  mutations
}
