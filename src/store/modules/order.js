import * as types from '../types'

const state = {
  orderMeals: [],
  promocode: null,
  isActive: false
}

const getters = {
  orderMeals: state => state.orderMeals,
  orderMealsCount: state => state.orderMeals.length,
  promocode: state => state.promocode,
  isActiveOrder: state => state.isActive
}

const mutations = {
  [types.ADD_MEAL] (state, meal) {
    state.orderMeals.push(meal)
  },
  [types.REMOVE_MEAL] (state, meal) {
    state.orderMeals = state.orderMeals.filter((i) => i.id !== meal.id)
  },
  [types.RESET_CARD] (state) {
    state.orderMeals = []
  },
  [types.SET_PROMOCODE] (state, promocode) {
    state.promocode = {
      name: promocode.name,
      discount: promocode.discount
    }
  },
  [types.SET_ORDER_ACTIVE] (state) {
    state.isActive = true
  }
}

export default {
  state,
  getters,
  mutations
}
