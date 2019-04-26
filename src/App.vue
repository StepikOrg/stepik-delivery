<template>
  <div id="app">
    <navbar :show="showNavbar"/>
    <b-container>
      <transition name="fade">
        <router-view/>
      </transition>
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
  computed: {
    showNavbar () {
      return this.$route.meta.navbar
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.fade-enter-active {
  transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
