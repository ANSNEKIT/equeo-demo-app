<template>
  <div class="sort d-flex">
    <a class="sort__link" @click="openSortList">
      <span class="sort__icon"><SortIcon /></span>
      Сортировка
    </a>
    <div class="sort__data sort-list" :class="isShowSortList ? 'show' : null">
      <label
        class="sort-list__item"
        v-for="(item, idx) in sortList"
        :key="idx"
        @change="changeSort(idx)"
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
    <p class="sort__select">{{ sortList[activeSortIndex] }}</p>
  </div>
</template>

<script>
import SortIcon from "./Icons/SortIcon.vue";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: { SortIcon },
  computed: {
    ...mapGetters(["isShowSortList", "sortList", "activeSortIndex"]),
  },
  methods: {
    ...mapMutations([
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
