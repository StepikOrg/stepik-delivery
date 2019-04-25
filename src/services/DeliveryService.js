import Api from '@/services/Api'

export default {
  testPost (params) {
    return Api().post('test', params)
  },

  testGet () {
    return Api().get('test.json')
  }
}
