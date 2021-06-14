import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios/request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPopupOpen: false,
    isShowSortList: false,
    sortList: [
      "По умолчанию",
      "Стоимость по возрастанию",
      "Стоимость по убыванию",
      "Новинки в начале",
      "Новинки в конце",
    ],
    sortedData: [],
    activeSortIndex: 0,
    dataList: [],
  },
  getters: {
    isOpen: (state) => state.isPopupOpen,
    isShowSortList: (state) => state.isShowSortList,
    sortList: (state) => state.sortList,
    activeSortIndex: (state) => state.activeSortIndex,
    products: (state) => state.dataList,
    sortedData: (state) => state.sortedData,
  },
  mutations: {
    openPopup: (state) => {
      if (!state.isPopupOpen) state.isPopupOpen = true;
    },
    closePopup: (state) => {
      if (state.isPopupOpen) state.isPopupOpen = false;
    },
    openSortList: (state) => {
      if (!state.isShowSortList) state.isShowSortList = true;
    },
    closeSortList: (state) => {
      if (state.isShowSortList) state.isShowSortList = false;
    },
    changeSortIndex: (state, payload) => {
      state.activeSortIndex = payload;
    },
    addProducts: (state, products) => {
      state.dataList = products;
    },
    addSortData: (state, sorted) => {
      state.sortedData = sorted;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        await axios
          .get("/shop/products")
          .then(function (response) {
            const products = response.data.success.products;
            return products;
          })
          .then((products) => commit("addProducts", products));
      } catch (e) {
        console.error(e);
      }
    },
    sortByPriceInc({ getters, commit }) {
      const sortedData = getters.products
        .slice()
        .sort((a, b) => a.price - b.price);
      commit("addSortData", sortedData);
    },
    sortByPriceDec({ getters, commit }) {
      const sortedData = getters.products
        .slice()
        .sort((a, b) => b.price - a.price);
      commit("addSortData", sortedData);
    },
    sortByDataNew({ getters, commit }) {
      const sortedData = getters.products
        .slice()
        .sort((a, b) => a.available_till - b.available_till);
      commit("addSortData", sortedData);
    },
    sortByDataOld({ getters, commit }) {
      const sortedData = getters.products
        .slice()
        .sort((a, b) => b.available_till - a.available_till);
      commit("addSortData", sortedData);
    },
  },
  modules: {},
});
