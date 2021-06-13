<template>
  <section class="card">
    <div>
      <img
        class="card__img"
        src="https://ekvio.ru/content/70/files/8f/8fb907a2a59e11ea988ce280a25fb977.png"
        alt="Яндекс.Плюс (1 месяц)"
        width="344"
        height="194"
      />
    </div>
    <div class="card__info">
      <h2 class="card__title">
        Комплект IQOS 2.4 Plus (ProtectPlusasdfsdf asdfsadgj sdgh
      </h2>
      <p class="card__bonus">500 баллов</p>
      <p class="card__options">
        <span class="card__hit"> <HitIcon /> хит </span>
        <span class="card__status">5 шт.</span>
        <span class="card__status">До 24 янв 2020</span>
      </p>
    </div>
  </section>
</template>

<script>
import HitIcon from "./HitIcon.vue";

export default {
  components: {
    HitIcon,
  },
};
</script>
