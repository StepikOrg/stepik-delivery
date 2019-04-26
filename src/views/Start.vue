<template>
  <b-row class="vh-100">
    <div class="w-100 d-flex flex-column align-items-center justify-content-center">
      <img
        src="@/assets/icons/loading.svg"
        alt="loading..."
        width="156"
        height="156">
      <strong>Ммм... загрузка</strong>
    </div>
  </b-row>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

export default {
  name: 'Start',
  components: {

  },
  mounted() {
    this.checkAlive()
  },
  methods: {
    async checkAlive() {
      const response = await DeliveryService.checkAlive()

      setTimeout(() => {
        response ? this.$router.push('home') : this.$router.push('sleep')
      }, 1000)
    }
  }
}
</script>
