<template>
  <div id="app">
    <navbar />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  beforeCreate() {

  }
}
</script>

<style lang="scss">

</style>
