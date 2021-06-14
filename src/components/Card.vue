<template>
  <section class="card">
    <div>
      <img
        class="card__img"
        :src="product.image"
        :alt="product.name"
        width="344"
        height="194"
      />
    </div>
    <div class="card__info">
      <h2 class="card__title">{{ product.name }}</h2>
      <p class="card__bonus">{{ product.price }}</p>
      <p class="card__options">
        <span class="card__hit" v-if="product.is_hit"> <HitIcon /> хит </span>
        <span class="card__status" v-if="product.available_count">
          {{ product.available_count }}
        </span>
        <span class="card__status">{{ renderDate }}</span>
      </p>
    </div>
  </section>
</template>

<script>
import HitIcon from "./HitIcon.vue";

export default {
  props: {
    product: Object,
  },
  components: {
    HitIcon,
  },
  data() {
    return {
      dateEnd: 0,
    };
  },
  computed: {
    renderDate() {
      const date = new Date(this.product.available_till);
      const options = {
        // year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
      };
      const str = "До " + date.toLocaleString("ru", options);
      return str;
    },
  },
};
</script>
