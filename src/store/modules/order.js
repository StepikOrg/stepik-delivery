import * as types from '../types'

const state = {
  orderMeals: []
}

const getters = {
  orderMeals: state => state.orderMeals,
  orderMealsCount: state => state.orderMeals.length
}

const mutations = {
  [types.ADD_MEAL] (state, meal) {
    state.orderMeals.push(meal)
  },
  [types.REMOVE_MEAL] (state, meal) {
    state.orderMeals = state.orderMeals.filter((i) => i.id !== meal.id)
  }
}

export default {
  state,
  getters,
  mutations
}
