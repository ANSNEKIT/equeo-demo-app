<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__left">
        <h1 class="header__page-title">Магазин подарков</h1>
        <div class="header__sort d-flex">
          <select name="sort" id="sort">
            <option value="">По умолчанию</option>
            <option value="">По возрастанию</option>
            <option value="">По убыванию</option>
            <option value="">Новинки в начале</option>
            <option value="">Новинки в конце</option>
          </select>
          <p>Выбор типа сортировки</p>
        </div>
      </div>
      <div class="header__right">
        <button class="btn header__button">
          О магазине
          <span class="btn-icon"><info-icon></info-icon></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import InfoIcon from "./InfoIcon.vue";

export default {
  components: {
    InfoIcon,
  },
};
</script>

<style></style>
