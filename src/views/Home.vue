<template>
<div class="">
  <b-row class="mt-3">
    <b-col>
      <home-card
        :promotion="promotion"
        :promocode="promocode"
        :workhours="workhours"
        :activeOrder="activeOrder"
        :deliveryTime="deliveryTime"
        @promocode:set="setPromocode"
        @activeorder:delete="deleteActiveOrder"/>
    </b-col>
  </b-row>
  <b-row class="mt-3">
    <b-col>
      <template v-if="meals.length">
        <meals-list
          counter
          :meals="meals"
          :promocode="promocode"
          @meal:add="addMeal"
          @meal:remove="removeMeal"/>
      </template>
      <template v-else>
        <strong>Загружаем список блюд</strong>
      </template>
    </b-col>
  </b-row>
</div>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

import MealsList from '@/components/MealsList'
import HomeCard from '@/components/HomeCard'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    MealsList,
    HomeCard
  },
  data () {
    return {
      promotion: null,
      code: null,
      meals: [],
      workhours: null,
      deliveryTime: null,
      activeOrder: null
    }
  },
  computed: {
    ...mapGetters([ 'promocode' ])
  },
  mounted () {
    this.getPromotion()
    this.getMeals()
    this.getWorkHours()
    this.getDeliveryTime()
    this.getActiveOrder()
    this.getProfile()
  },
  methods: {
    ...mapActions([ 'getProfile' ]),
    async setPromocode (promocode) {
      try {
        const discount = await DeliveryService.setPromocode(promocode)
        this.$store.commit('SET_PROMOCODE', {
          name: promocode,
          discount: discount
        })
        this.$bvToast.toast(`Промокод успешно применен`, {
          title: 'Успех',
          solid: true,
          variant: 'success',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 3000,
          appendToast: false
        })
      } catch (e) {
        this.$bvToast.toast(`Промокод не найден`, {
          title: 'Ошибка',
          solid: true,
          variant: 'danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 3000,
          appendToast: false
        })
      }
    },
    async getPromotion () {
      try {
        this.promotion = await DeliveryService.getPromotion()
      } catch (e) {
        this.promotion = null
      }
    },
    async getMeals () {
      try {
        this.meals = await DeliveryService.getMeals()
      } catch (e) {
        this.meals = null
      }
    },
    async getWorkHours () {
      try {
        this.workhours = await DeliveryService.getWorkHours()
      } catch (e) {
        this.workhours = null
      }
    },
    async getActiveOrder () {
      try {
        this.activeOrder = await DeliveryService.getActiveOrder()
      } catch (e) {
        this.activeOrder = null
      }
    },
    async deleteActiveOrder () {
      try {
        await DeliveryService.deleteActiveOrder()
        this.$store.commit('SET_ORDER_ACTIVE', false)
        this.getActiveOrder()
      } catch (e) {

      }
    },
    async getDeliveryTime () {
      const delivers = await DeliveryService.getDeliveryTime()
      const time = new Date(delivers.time * 1000)

      this.deliveryTime = `${time.getHours()}:${time.getMinutes()}`
    },
    addMeal (meal) {
      this.$store.commit('ADD_MEAL', meal)
    },
    removeMeal (meal) {
      this.$store.commit('REMOVE_MEAL', meal)
    }
  }
}
</script>
