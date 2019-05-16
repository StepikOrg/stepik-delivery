import Api from '@/services/Api'

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

  getProfile () {
    return Api().get('profile')
  },

  updateProfile (newProfile) {
    return Api().patch('profile', newProfile)
  },

  getPromotion () {
    return Api().get('promotion')
  },

  getActiveOrder () {
    return Api().get('activeorder')
  },

  deleteActiveOrder () {
    return Api().delete('activeorder')
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
