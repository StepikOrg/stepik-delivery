export default {
  pluralize (titles, n) {
    return `${n} ${titles[
      (n%10==1 && n%100!=11) ? 0
      : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1
      : 2]}`
  },

  install (Vue, options) {
    Vue.filter('pluralize', this.pluralize)

    Vue.prototype.$pluralize = Vue.$pluralize = this.pluralize
  }
}
