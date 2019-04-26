<template>
<div class="">
  <b-row class="mt-3">
    <b-col v-if="orderMeals.length">
      <meals-list
        :meals="orderMeals"
        @meal:remove="removeMeal"/>
    </b-col>
  </b-row>
</div>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

import MealsList from '@/components/MealsList'

import { mapGetters } from 'vuex'

export default {
  name: 'Order',
  components: {
    MealsList
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
    ])
  },
  methods: {
    removeMeal (meal) {
      this.$store.commit('REMOVE_MEAL', meal)
    }
  }
}
</script>
