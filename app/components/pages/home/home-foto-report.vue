<template>
  <div :class="rootContainer">
    <div class="root-component">
      <div :class="title">
        <h2 class="description-title description-title-mobile">фото-отчет</h2>
        <h2 class="component-title component-title-mobile">
          Делимся впечатлениями
        </h2>
      </div>

      <div :class="carouselContainer">
        <div class="foto-report" :class="carouselClass">
          <ReportImg
            :key="foto.id"
            v-for="foto in fotoList"
            :bgImg="foto.props"
            :class="{ 'width-wide': foto.id === 0 || foto.id === 4 }"
            class="carousel-item"
          />
        </div>
      </div>

      <a class="buttons-dark" :class="buttons" href="#">Наш pinterest</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ReportImg from "./home-foto-report/report-img.vue";

import balloons from "../../../assets/images/content/home-foto-report/balloons.jpg";
import belongings from "../../../assets/images/content/home-foto-report/belongings.jpg";
import skyscraper from "../../../assets/images/content/home-foto-report/skyscraper.jpg";
import coast from "../../../assets/images/content/home-foto-report/coast.jpg";
import canyon from "../../../assets/images/content/home-foto-report/canyon.jpg";
import copybook from "../../../assets/images/content/home-foto-report/copybook.jpg";

const { breakpoint } = useViewport();

const isMobile = computed(() => breakpoint.value === "mobile");
const isTablet = computed(() => breakpoint.value === "tablet");
const isDesktop = computed(() => breakpoint.value === "desktop");

const rootContainer = computed(() => ({
  "root-container": isDesktop.value,
}));
const title = computed(() => ({
  "title-desktop": isDesktop.value,
}));
const buttons = computed(() => ({
  "buttons-dark-mobile": isMobile.value || isTablet.value,
  "buttons-dark-desktop": isDesktop.value,
}));
const carouselClass = computed(() => ({
  "carousel-scroll": isMobile.value || isTablet.value,
  "carousel-grid": isDesktop.value,
}));
const carouselContainer = computed(() => ({
  "carousel-container": isMobile.value || isTablet.value,
}));

const fotoList = [
  { id: 0, props: balloons },
  { id: 1, props: belongings },
  { id: 2, props: skyscraper },
  { id: 3, props: coast },
  { id: 4, props: canyon },
  { id: 5, props: copybook },
];
</script>

<style>
.root-component {
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

/* Стили для карусели на мобилках и планшетах */
.carousel-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  margin: 0;
  padding: 0;
  /* Включаем snap scrolling */
  scroll-snap-type: x mandatory;
}

.carousel-container::-webkit-scrollbar {
  height: 4px;
}

.carousel-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.carousel-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.foto-report.carousel-scroll {
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 0;
  margin: 0;
}

.foto-report.carousel-scroll .carousel-item {
  flex-shrink: 0;
  width: 280px;
  /* Каждый элемент прижимается к левому краю */
  scroll-snap-align: start;
  /* Добавляем скругление для лучшего визуала */
  scroll-snap-stop: always;
}

/* Стили для десктопа - обычная сетка */
.foto-report.carousel-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons-dark {
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .root-component {
    padding: 80px 0;
  }
  .description-title {
    text-align: center;
    font-size: 24px;
  }
  .component-title {
    text-align: center;
    font-size: 32px;
  }

  .foto-report.carousel-grid .carousel-item {
    flex: 0 0 auto;
    /* width: calc(33.333% - 14px); */
  }
}

@media (min-width: 1280px) {
  .width-wide {
    width: 580px !important;
  }
}
</style>
