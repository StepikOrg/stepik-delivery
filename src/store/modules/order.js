import * as types from '../types'
import DeliveryService from '@/services/DeliveryService'

const state = {
  orderMeals: [],
  orders: [],
  promocode: null,
  isActive: false
}

const getters = {
  orderMeals: state => state.orderMeals,
  orderMealsCount: state => state.orderMeals.length,
  orders: state => state.orders,
  promocode: state => state.promocode,
  isActiveOrder: state => state.isActive
}

const actions = {
  async getOrders ({ commit }) {
    try {
      const response = await DeliveryService.getOrders()
      commit(types.SET_ORDERS, response)
    } catch (e) {
      commit(types.SET_ORDERS, null)
    }
  },
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
  [types.SET_ORDER_ACTIVE] (state, status) {
    state.isActive = status
  },
  [types.SET_ORDERS] (state, orders) {
    state.orders = orders
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
