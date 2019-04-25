<template>
<div class="">
  <b-row class="mt-3">
    <b-col>
      <b-card no-body>
        <b-list-group flush>
          <b-list-group-item>Загружаем время доставки</b-list-group-item>
          <b-list-group-item v-if="promotion">{{ promotion.title }}</b-list-group-item>
          <b-list-group-item>
            <b-input-group>
              <b-form-input placeholder="Введите промокод"></b-form-input>
              <b-input-group-append>
                <b-button @click="makeToast()" size="sm" text="Button" variant="success">Применить</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-col>
  </b-row>
  <b-row class="mt-3">
    <b-col v-if="meals.length">
      <strong>{{ mealsCount }} блюда в каталоге</strong>
      <ul class="list-unstyled mt-3">
        <b-media v-for="item in meals" :key="item.id" class="my-4" tag="li">
          <b-img slot="aside" :src="item.picture" blank-color="#abc" height="64" width="64" alt="placeholder"></b-img>

          <strong class="mt-0 mb-1">{{ item.title }}</strong>
          <p class="mb-0">{{ item.price }} рублей</p>
          <b-button @click="addMeal(item)">Добавить</b-button>
        </b-media>
      </ul>
    </b-col>
  </b-row>
</div>
</template>

<script>
import DeliveryService from '@/services/DeliveryService'

export default {
  data() {
    return {
      promotion: null,
      meals: [],
    }
  },
  computed: {
    mealsCount() {
      return this.meals.length
    }
  },
  mounted() {
    this.getPromotion()
    this.getMeals()
  },
  methods: {
    makeToast(append = false) {
      this.$bvToast.toast(`Промокод не найден`, {
        title: 'Ошибка',
        solid: true,
        variant: 'danger',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 3000,
        appendToast: append
      })
    },
    async getPromotion() {
      this.promotion = await DeliveryService.getPromotion()
    },
    async getMeals() {
      this.meals = await DeliveryService.getMeals()
    },
    addMeal (meal) {
      this.$store.commit('ADD_MEAL', meal)
    }
  }
}
</script>
