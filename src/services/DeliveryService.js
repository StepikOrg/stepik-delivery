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

  testPost (params) {
    return Api().post('test', params)
  },

  testGet () {
    return Api().get('test.json')
  }
}
