<template>
<b-navbar v-if="show" toggleable="lg" type="dark" variant="dark">
  <b-navbar-brand>
    <template v-if="isMainPage">
      STEPIKDELIVERY
    </template>
    <template v-else>
      <div class="d-flex align-items-center">
        <img
          src="@/assets/icons/forward.svg"
          alt="Go back"
          width="15"
          height="15"
          @click="goBack">
        <span class="ml-2">{{ pageTitle }}</span>
      </div>
    </template>
  </b-navbar-brand>
  <b-navbar-nav class="d-flex flex-row ml-auto">
    <b-nav-item
      v-if="isMainPage"
      class="mr-3"
      :to="{ name: 'profile' }">
      <img
        src="@/assets/icons/profile.svg"
        alt="Go back"
        width="20"
        height="20">
    </b-nav-item>
    <b-nav-item
      v-if="isMainPage"
      :to="{ name: 'cart' }">
      <img
        src="@/assets/icons/cart.svg"
        alt="Go back"
        width="20"
        height="20">
      <b-badge class="ml-1" variant="light">{{ orderMealsCount }}</b-badge>
    </b-nav-item>
  </b-navbar-nav>
</b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters([
      'orderMealsCount'
    ]),
    isMainPage () {
      return this.$route.name === 'home'
    },
    pageTitle () {
      return this.$route.meta.title
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
