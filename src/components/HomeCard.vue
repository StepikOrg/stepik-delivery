<template lang="html">
  <div>
    <template v-if="activeOrder">
      <b-alert show variant="success">
        <div class="d-flex flex-column">
          <div>
            Доставка в <strong>{{ deliveryTime }}</strong>
          </div>
          <div class="">
            <strong>{{ activeOrder.meals.length }}</strong>
            блюд на сумму
            <strong>{{ activeOrder.summ }}</strong>
            рублей
          </div>
          <div class="">
            <b-badge variant="success">Идет доставка</b-badge>
          </div>
        </div>
      </b-alert>
    </template>
    <template v-else>
      <b-card no-body>
        <b-list-group flush>
          <b-list-group-item>
            <template v-if="!workhours">
              Загружаем время доставки
            </template>
            <template v-else>
              Сегодня доставляем с {{ workhours.opens }} до {{ workhours.closes }}
            </template>
            <template v-if="deliveryTime">
              Привезем ваш заказ в {{ deliveryTime }}
            </template>
          </b-list-group-item>
          <b-list-group-item v-if="promotion">{{ promotion.title }}</b-list-group-item>
          <b-list-group-item>
            <template v-if="promocode">
              Применен промокод
              <strong>{{ promocode.name }}</strong>
            </template>
            <template v-else>
              <b-input-group>
                <b-form-input
                  v-model="code"
                  placeholder="Введите промокод"/>
                <b-input-group-append>
                  <b-button
                    @click="$emit('promocode:set', code)"
                    size="sm" text="Button"
                    variant="success">
                    Применить
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </template>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    workhours: {
      type: Object,
      require: true
    },
    promotion: {
      type: Object,
      require: true
    },
    promocode: {
      type: Object,
      require: true
    },
    deliveryTime: {
      type: String,
      require: true
    },
    activeOrder: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      code: null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
