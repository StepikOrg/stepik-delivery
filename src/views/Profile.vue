<template>
<b-row class="mt-3">
  <b-col>
    <b-alert
      v-if="orders"
      variant="primary"
      show>
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <div>
            История заказов
          </div>
          <div>
            <strong>{{ orders.length }} заказов</strong>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="@/assets/icons/forward-blue.svg"
            class="rotate-180"
            alt="Go back"
            width="15"
            height="15"
            @click="goToOrdersHistory">
        </div>
      </div>
    </b-alert>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Имя"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="user.name"
          required
          placeholder="Александр"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Телефон" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.phone"
          type="number"
          required
          placeholder="+79991233232"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Адрес" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="user.address"
          required
          rows="3"
          max-rows="6"/>
      </b-form-group>

      <b-button type="submit" variant="dark">Применить</b-button>
    </b-form>
  </b-col>
</b-row>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

export default {
  name: 'Profile',
  data() {
    return {
      user: {
        name: 'Александр',
        phone: '89991233232',
        address: 'Санкт-Петербург'
      },
      orders: null
    }
  },
  mounted () {
    this.getOrders()
  },
  methods: {
    async getOrders () {
      this.orders = await DeliveryService.getOrders()
    },
    onSubmit () {

    },
    goToOrdersHistory () {
      console.log('');
      this.$router.push({ name: orders })
    }
  }
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg)
}
</style>
