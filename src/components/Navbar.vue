<template>
<b-navbar toggleable="lg" type="dark" variant="dark">
  <b-navbar-brand :to="{ name: 'home' }">STEPIKDELIVERY</b-navbar-brand>
  <b-navbar-nav class="ml-auto">
    <b-nav-item :to="{ name: 'order' }">Корзина</b-nav-item>
  </b-navbar-nav>
</b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
