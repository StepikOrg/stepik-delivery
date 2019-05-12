<template>
<div>
  <b-form
    class="mb-3"
    @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Имя"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="profile.name"
        disabled
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Телефон" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="profile.phone"
        disabled
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Адрес" label-for="input-3">
      <b-form-textarea
        id="input-3"
        v-model="profile.address"
        disabled/>
    </b-form-group>

    <b-button type="submit" variant="dark">Отправить заказ</b-button>
  </b-form>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OrderForm',
  data() {
    return {
      orderForm: {
        name: '',
        phone: '',
        address: ''
      }
    }
  },
  computed: {
    ...mapGetters([ 'profile' ])
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('order:send', this.orderForm)
    }
  }
}
</script>

<style scoped>
</style>
