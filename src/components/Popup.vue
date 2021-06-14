<template>
  <div class="popup backdrop" @click="closePopup" @keydown.esc="closePopup">
    <div class="popup__body">
      <div class="popup__content" @click.stop>
        <slot>
          <h1 class="popup__title">
            Условия приобретения и получения подарков
          </h1>
        </slot>
        <slot name="text">
          <p class="popup__paragraph">
            Бизнес-ланч для любимого клиента от службы доставки еды "Яндекс.Еда"
            на сумму до 300р. Оплата возмещается наличными средствами или
            переводом на карту после предоставления Юлии Белоножкиной чека в
            бумажном или электронном формате. Сумма подлежащая выплате равна
            сумме, указанной в чеке.
          </p>
          <p class="popup__paragraph">
            Бизнес-ланч для любимого клиента от службы доставки еды "Яндекс.Еда"
            на сумму до 300р. Оплата возмещается наличными средствами или
            переводом на карту после предоставления Юлии Белоножкиной чека в
            бумажном или электронном формате. Сумма подлежащая выплате равна
            сумме, указанной в чеке.
          </p>
        </slot>
        <button class="popup__close" @click="closePopup">X<span></span></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  computed: {
    ...mapGetters(["isOpen"]),
  },
  methods: {
    ...mapMutations(["closePopup"]),
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.closePopup();
      }
    },
  },
};
</script>

<style></style>
