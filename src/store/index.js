import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPopupOpen: false,
    isShowSortList: false,
    sortList: [
      "По умолчанию",
      "По возрастанию",
      "По убыванию",
      "Новинки в начале",
      "Новинки в конце",
    ],
    activeSortIndex: 0,
  },
  getters: {
    isOpen: (state) => state.isPopupOpen,
    isShowSortList: (state) => state.isShowSortList,
    sortList: (state) => state.sortList,
    activeSortIndex: (state) => state.activeSortIndex,
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
  },
  actions: {},
  modules: {},
});
