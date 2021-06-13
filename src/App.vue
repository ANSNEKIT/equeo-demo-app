<template>
  <div id="app">
    <Header />
    <main class="app__main container">
      <Card v-for="item in 9" :key="item" />
    </main>
    <Popup />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Popup from "./components/Popup.vue";

export default {
  name: "App",
  components: {
    Header,
    Card,
    Popup,
  },
};
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
