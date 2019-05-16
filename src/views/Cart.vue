<template>
<b-row class="mt-3">
  <b-col>
    <template v-if="isActiveOrder">
      <b-alert variant="success" show>Заказ отправлен, ждите 🙂</b-alert>
    </template>
    <template v-else-if="orderMeals.length">
      <meals-list
        order
        :meals="orderMeals"
        :totalPrice="totalPrice"
        @meal:remove="removeMeal"/>
      <order-form
        @order:send="sendOrder"/>
    </template>
    <template v-else>
      <b-alert variant="danger" show>Корзина пуста</b-alert>
    </template>
    <b-button
      :to="{name: 'orders'}"
      variant="dark">Показать историю заказов</b-button>
  </b-col>
</b-row>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

import MealsList from '@/components/MealsList'
import OrderForm from '@/components/OrderForm'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
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
      'orderMeals',
      'promocode',
      'isActiveOrder'
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
      let totalPrice = 0
      for (const meal of this.orderMeals) {
        totalPrice = totalPrice + meal.price
      }
      return totalPrice
    },
    async sendOrder () {
      try {
        const orderMealsId = this.orderMeals.map(i => i.id)

        await DeliveryService.sendOrder({
          meals: orderMealsId
        })

        this.$store.commit('SET_ORDER_ACTIVE', true)
        this.$store.commit('RESET_CARD')
      } catch (e) {
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
}
</script>
