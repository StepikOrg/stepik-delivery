<template>
<b-row class="mt-3">
  <b-col>
    <b-card
      v-for="order in orders"
      :key="order.id"
      class="mb-3">
      <b-card-text>
        <div class="">
          {{ new Date(order.ordered * 1000).toLocaleString('ru-RU') }}
        </div>
        <div class="">
          <strong>{{ ['блюдо', 'блюда', 'блюд'] | pluralize(order.meals.length) }}</strong>
          на сумму
          <strong>{{ order.summ }}</strong>
          рублей
        </div>
        <div class="mt-2">
          <template v-if="order.status === 'ACCEPTED'">
            <b-badge
              pill
              class="px-3 py-2"
              variant="primary">
              Принят
            </b-badge>
          </template>
          <template v-if="order.status === 'CANCELLED'">
            <b-badge
              pill
              class="px-3 py-2"
              variant="danger">
              Отменен
            </b-badge>
          </template>
          <div v-if="order.status === 'ACCEPTED'" class="mt-2">
            <b-button
              size="sm"
              variant="dark"
              @click="deleteActiveOrder">
              Отменить заказ
            </b-button>
          </div>
        </div>
      </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </b-col>
</b-row>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'
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
    ...mapActions([ 'getOrders' ]),
    async deleteActiveOrder () {
      try {
        await DeliveryService.deleteActiveOrder()
        this.$store.commit('SET_ORDER_ACTIVE', false)
        this.getOrders()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
</style>
