<template>
  <b-row class="vh-100">
    <div class="w-100 d-flex flex-column align-items-center justify-content-center">
      <img
        src="@/assets/icons/sleep.svg"
        alt="loading..."
        width="156"
        height="156">
      <strong class="mt-4">Сервер не отвечает</strong>
      <span class="mb-4">Возможно, прилег поспать</span>
      <b-button variant="dark" :to="{ name: 'start' }">Попровать еще раз</b-button>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'Sleep',
  components: {

  },
  methods: {

  }
}
</script>
