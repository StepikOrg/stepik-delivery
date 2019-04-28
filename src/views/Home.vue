<template>
<div class="">
  <b-row class="mt-3">
    <b-col>
      <b-card no-body>
        <b-list-group flush>
          <b-list-group-item>
            <template v-if="!workhours">
              Загружаем время доставки
            </template>
            <template v-else>
              Сегодня доставляем с {{ workhours.opens }} до {{ workhours.closes }}
            </template>
            <template v-if="deliveryTime">
              Привезем ваш заказ в {{ deliveryTime }}
            </template>
          </b-list-group-item>
          <b-list-group-item v-if="promotion">{{ promotion.title }}</b-list-group-item>
          <b-list-group-item>
            <b-input-group>
              <b-form-input placeholder="Введите промокод"></b-form-input>
              <b-input-group-append>
                <b-button @click="makeToast()" size="sm" text="Button" variant="success">Применить</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-col>
  </b-row>
  <b-row class="mt-3">
    <b-col>
      <template v-if="meals.length">
        <meals-list
          counter
          :meals="meals"
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

export default {
  name: 'Home',
  components: {
    MealsList
  },
  data () {
    return {
      promotion: null,
      meals: [],
      workhours: null,
      deliveryTime: null
    }
  },
  mounted () {
    this.getPromotion()
    this.getMeals()
    this.getWorkHours()
    this.getDeliveryTime()
  },
  methods: {
    makeToast () {
      this.$bvToast.toast(`Промокод не найден`, {
        title: 'Ошибка',
        solid: true,
        variant: 'danger',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 3000,
        appendToast: false
      })
    },
    async getPromotion () {
      this.promotion = await DeliveryService.getPromotion()
    },
    async getMeals () {
      this.meals = await DeliveryService.getMeals()
    },
    async getWorkHours () {
      this.workhours = await DeliveryService.getWorkHours()
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
