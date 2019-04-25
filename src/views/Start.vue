<template>
  <b-row>
    <div class="m-auto">
      <img
        src="@/assets/icons/loading.svg"
        alt="loading..."
        width="156"
        height="156">
      <p class="text-center">Ммм... загрузка</p>
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
