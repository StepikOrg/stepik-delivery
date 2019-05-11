import Api from '@/services/Api'

const getRandom = () => {
  return Math.random() >= 0.5
}

export default {
  checkAlive () {
    return Api().get('alive')
  },

  setPromocode (promocode) {
    return Api().get(`promocode/${promocode}`)
  },

  sendOrder (order) {
    return Api().post('orders', order)
  },

  getPromotion () {
    return Api().get('promotion')
  },

  getActiveOrder () {
    return Api().get('activeorder')
  },

  getMeals () {
    return Api().get('meals')
  },

  getOrders () {
    return Api().get('orders')
  },

  getWorkHours () {
    return Api().get('workhours')
  },

  getDeliveryTime () {
    return Api().get('delivers')
  }
}
