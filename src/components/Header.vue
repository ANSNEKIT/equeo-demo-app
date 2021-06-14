<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__left">
        <h1 class="header__page-title">Магазин подарков</h1>
        <div class="header__sort d-flex">
          <a class="header__sort-link" @click="openSortList">
            <span class="header__sort-icon"><SortIcon /></span>
            Сортировка
          </a>
          <div
            class="header__sort-list sort-list"
            :class="isShowSortList ? 'show' : null"
          >
            <label
              class="sort-list__item"
              v-for="(item, idx) in sortList"
              :key="idx"
              @change="changeSort(idx)"
              @select="sortByPriceInc"
            >
              <input
                class="sort-list__input"
                type="radio"
                :value="idx + 1"
                name="order"
                :checked="idx === 0"
              />
              <span class="sort-list__content">{{ item }}</span>
            </label>
          </div>
          <p class="header__sort-type">{{ sortList[activeSortIndex] }}</p>
        </div>
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
import InfoIcon from "./InfoIcon.vue";
import SortIcon from "./SortIcon.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    InfoIcon,
    SortIcon,
  },
  computed: {
    ...mapGetters(["isShowSortList", "sortList", "activeSortIndex"]),
  },
  methods: {
    ...mapMutations([
      "openPopup",
      "openSortList",
      "closeSortList",
      "changeSortIndex",
      "addSortData",
    ]),
    ...mapActions([
      "sortByPriceInc",
      "sortByPriceDec",
      "sortByDataNew",
      "sortByDataOld",
    ]),
    changeSort(index) {
      this.changeSortIndex(index);

      switch (this.activeSortIndex) {
        case 0:
          this.addSortData([]);
          break;
        case 1:
          this.sortByPriceInc();
          break;
        case 2:
          this.sortByPriceDec();
          break;
        case 3:
          this.sortByDataNew();
          break;
        case 4:
          this.sortByDataOld();
          break;
      }
    },
  },
};
</script>

<style></style>
