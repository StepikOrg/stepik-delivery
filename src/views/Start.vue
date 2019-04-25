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

export default {
  name: 'Start',
  components: {

  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: 'home' })
    }, 1000)
  }
}
</script>
