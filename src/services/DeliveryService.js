import Api from '@/services/Api'

const getRandom = () => {
  return Math.random() >= 0.5
}

export default {
  checkAlive () {
    return Api().get(getRandom() ? 'alive/true.json' : 'alive/false.json')
  },

  getPromotion () {
    return Api().get('promotion.json')
  },

  getMeals () {
    return Api().get('meals.json')
  },

  getWorkHours () {
    return Api().get('workhours.json')
  },

  getDeliveryTime () {
    return Api().get('delivers.json')
  },

  testPost (params) {
    return Api().post('test', params)
  }
}
