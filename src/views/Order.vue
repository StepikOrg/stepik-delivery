<template>
<div class="">
  <b-row class="mt-3">
    <b-col>
      <template v-if="orderMeals.length">
        <meals-list
          order
          :meals="orderMeals"
          :totalPrice="totalPrice"
          @meal:remove="removeMeal"/>
        <order-form
          @order:send="sendOrder"/>
      </template>
      <template v-else>
        <strong>Корзина пуста</strong>
      </template>
    </b-col>
  </b-row>
</div>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

import MealsList from '@/components/MealsList'
import OrderForm from '@/components/OrderForm'

import { mapGetters } from 'vuex'

export default {
  name: 'Order',
  components: {
    MealsList,
    OrderForm
  },
  data() {
    return {
      promotion: null,
      meals: [],
    }
  },
  computed: {
    ...mapGetters([
      'orderMeals'
    ]),
    totalPrice () {
      let totalPrice = null

      this.orderMeals.forEach(i => totalPrice += i.price)

      return totalPrice
    }
  },
  methods: {
    removeMeal (meal) {
      this.$store.commit('REMOVE_MEAL', meal)
    },
    getTotalPrice () {
      const totalPrice = 1129
      for (const meal of this.orderMeals) {
        console.log(totalPrice);
        totalPrice = totalPrice + meal.price
      }
      return totalPrice
    },
    sendOrder (orderForm) {
      this.$bvToast.toast(`Не удалось отправить заказ`, {
        title: 'Ошибка',
        solid: true,
        variant: 'danger',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 3000,
        appendToast: false
      })
    }
  }
}
</script>
