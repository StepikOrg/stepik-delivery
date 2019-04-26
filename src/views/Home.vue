<template>
<div class="">
  <b-row class="mt-3">
    <b-col>
      <b-card no-body>
        <b-list-group flush>
          <b-list-group-item>Загружаем время доставки</b-list-group-item>
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
    <b-col v-if="meals.length">
      <meals-list
        counter
        :meals="meals"
        @meal:add="addMeal"
        @meal:remove="removeMeal"/>
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
    }
  },
  mounted () {
    this.getPromotion()
    this.getMeals()
  },
  methods: {
    makeToast (append = false) {
      this.$bvToast.toast(`Промокод не найден`, {
        title: 'Ошибка',
        solid: true,
        variant: 'danger',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 3000,
        appendToast: append
      })
    },
    async getPromotion () {
      this.promotion = await DeliveryService.getPromotion()
    },
    async getMeals () {
      this.meals = await DeliveryService.getMeals()
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
