<template>
<div class="">
  <b-row class="mt-3">
    <b-col v-if="orderMeals.length">
      <ul class="list-unstyled mt-3">
        <b-media v-for="item in orderMeals" :key="item.id" class="my-4" tag="li">
          <b-img slot="aside" :src="item.picture" blank-color="#abc" height="64" width="64" alt="placeholder"></b-img>

          <strong class="mt-0 mb-1">{{ item.title }}</strong>
          <p class="mb-0">{{ item.price }} рублей</p>
          <b-button @click="addMeal(item)">Добавить</b-button>
        </b-media>
      </ul>
    </b-col>
  </b-row>
</div>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

export default {
  data() {
    return {
      promotion: null,
      meals: [],
    }
  },
  computed: {
    orderMeals() {
      return this.$store.getters.orderMeals
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
