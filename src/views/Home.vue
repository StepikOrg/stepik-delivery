<template>
<div class="">
  <b-row class="mt-3">
    <b-col>
      <b-card no-body>
        <b-list-group flush>
          <b-list-group-item>Загружаем время доставки</b-list-group-item>
          <b-list-group-item>Загружаем акции</b-list-group-item>
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
    <b-col>
      <strong>3 блюда в каталоге</strong>
      <ul class="list-unstyled mt-3">
        <b-media tag="li">
          <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>

          <h5 class="mt-0 mb-1">Название блюда</h5>
          <p class="mb-0">Описание блюда</p>
        </b-media>

        <b-media tag="li" class="my-4">
          <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>

          <h5 class="mt-0 mb-1">Название блюда</h5>
          <p class="mb-0">Описание блюда</p>
        </b-media>

        <b-media tag="li">
          <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder"></b-img>

          <h5 class="mt-0 mb-1">Название блюда</h5>
          <p class="mb-0">Описание блюда</p>
        </b-media>
      </ul>
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
  data() {
    return {}
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
    }
  }
}
</script>
