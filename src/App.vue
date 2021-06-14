<template>
  <div id="app">
    <Header />
    <main class="app__main container">
      <Card
        v-for="(product, idx) in renderSort"
        :key="idx"
        :product="product"
      />
    </main>
    <Popup v-if="isOpen" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Popup from "./components/Popup.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Card,
    Popup,
  },
  mounted() {
    document.addEventListener("click", this.handleCloseSortList);

    this.$store.dispatch("fetchData");
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleCloseSortList);
  },
  computed: {
    ...mapGetters(["isOpen", "isShowSortList", "products", "sortedData"]),
    renderSort() {
      if (this.sortedData.length) {
        return this.sortedData;
      } else {
        return this.products;
      }
    },
  },
  methods: {
    ...mapMutations(["closeSortList"]),
    handleCloseSortList(e) {
      if (this.isShowSortList && e.target.className !== "sort__link") {
        this.closeSortList();
      }
    },
  },
};
</script>
