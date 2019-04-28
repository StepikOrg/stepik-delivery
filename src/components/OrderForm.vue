<template>
<div>
  <b-form @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Имя"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="orderForm.name"
        required
        placeholder="Александр"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Телефон" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="orderForm.phone"
        type="number"
        required
        placeholder="+79991233232"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Адрес" label-for="input-3">
      <b-form-textarea
        id="input-3"
        v-model="orderForm.address"
        required
        rows="3"
        max-rows="6"/>
    </b-form-group>

    <b-button type="submit" variant="dark">Отправить заказ</b-button>
  </b-form>
</div>
</template>

<script>
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
