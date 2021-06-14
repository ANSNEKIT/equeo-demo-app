<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__left">
        <h1 class="header__page-title">Магазин подарков</h1>
        <Sort />
      </div>
      <div class="header__right">
        <button class="btn header__button" @click="openPopup">
          О магазине
          <span class="btn__icon"><info-icon></info-icon></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import InfoIcon from "./Icons/InfoIcon.vue";
import Sort from "./Sort.vue";

import { mapMutations } from "vuex";

export default {
  components: {
    InfoIcon,
    Sort,
  },
  methods: {
    ...mapMutations(["openPopup"]),
  },
};
</script>

<style></style>
