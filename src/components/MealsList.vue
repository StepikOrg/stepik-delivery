<template>
<div class="meals-list">
  <strong v-if="counter">
    {{ ['блюдо', 'блюда', 'блюд'] | pluralize(meals.length) }}
    в каталоге</strong>
  <strong v-if="totalPrice">
    {{ ['товар', 'товара', 'товаров'] | pluralize(meals.length) }}
    на сумму
    {{ ['рубль', 'рубля', 'рублей'] | pluralize(totalPrice) }}
  </strong>
  <ul class="list-unstyled mt-3">
    <b-media v-for="item in meals" :key="item.id" class="mb-4" tag="li">
      <b-img
        v-if="item.picture"
        slot="aside"
        :src="item.picture"
        blank-color="#abc"
        height="59"
        width="59"
        rounded
        :alt="item.title"/>

      <div class="d-flex align-items-center justify-content-between">
        <div class="">
          <strong class="mt-0 mb-1">{{ item.title }}</strong>
          <p class="mb-0">
            {{ ['рубль', 'рубля', 'рублей'] | pluralize(item.price) }}
          </p>
        </div>
        <div>
          <template v-if="!isOrdered(item.id)">
            <img
              src="@/assets/icons/add.svg"
              alt="Добавить"
              width="20"
              height="20"
              @click="$emit('meal:add', item)">
          </template>
          <template v-else-if="isOrdered(item.id)">
            <img
              src="@/assets/icons/remove.svg"
              alt="Удалить"
              width="18"
              height="14"
              @click="$emit('meal:remove', item)">
          </template>
        </div>
      </div>
    </b-media>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MealsList',
  props: {
    meals: {
      type: Array,
      default: () => []
    },
    counter: {
      type: Boolean,
      default: false
    },
    order: {
      type: Boolean,
      default: false
    },
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  methods: {
    isOrdered (id) {
      return !!this.orderMeals.find((i) => i.id === id)
    }
  },
  computed: {
    ...mapGetters([
      'orderMeals'
    ])
  }
}
</script>

<style scoped>
</style>
