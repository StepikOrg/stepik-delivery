<template>
<b-row class="mt-3">
  <b-col>
    <b-card
      v-for="order in orders"
      :key="order.id"
      class="mb-3">
      <b-card-text>
        <div class="">
          <strong>{{ order.meals.length }}</strong>
          блюда на сумму
          <strong>{{ order.summ }}</strong>
          рублей
        </div>
        <div class="">
          {{ order.status }}
        </div>
      </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </b-col>
</b-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Orders',
  computed: {
    ...mapGetters([ 'orders' ])
  },
  mounted () {
    this.getOrders()
  },
  methods: {
    ...mapActions([ 'getOrders' ])
  }
}
</script>

<style scoped>
</style>
