<template>
  <b-row>
    <div class="m-auto">
      <img
        src="@/assets/icons/sleep.svg"
        alt="loading..."
        width="156"
        height="156">
      <p class="text-center">Сервер не отвечает </p>
      <p class="text-center"> Возможно, прилег поспать</p>
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
