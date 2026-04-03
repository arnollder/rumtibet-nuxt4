<template>
  <div class="root-bg">
    <div :class="rootContainer">
      <div class="root-component">
        <div :class="title">
          <h2 class="description-title description-title-mobile">
            делимся впечатлениями
          </h2>
          <h2 class="component-title component-title-mobile">
            Блог о путешествиях
          </h2>
        </div>

        <div class="karusel-container">
          <div class="karusel">
            <BlogItem
              class="karusel-item"
              :img="italiaImg"
              :title="'Красивая Италия, какая она&nbsp;в&nbsp;реальности?'"
              :text="'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'"
              :date="'01/04/2023'"
            />
            <BlogItem
              class="karusel-item"
              :img="flyImg"
              :title="'Долой сомнения! Весь мир открыт для вас!'"
              :text="'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...'"
              :date="'01/04/2023'"
            />
            <BlogItem
              class="karusel-item"
              :img="travelAloneImg"
              :title="'Как подготовиться к путешествию в одиночку?'"
              :text="'Для современного мира базовый вектор развития предполагает.'"
              :date="'01/04/2023'"
            />
            <BlogItem
              class="karusel-item"
              :img="indiaImg"
              :title="'Индия ... летим?'"
              :text="'Для современного мира базовый.'"
              :date="'01/04/2023'"
            />
          </div>
        </div>

        <a class="buttons-dark" :class="buttons" href="#">Другие материалы</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogItem from "./home-blog/blog-item.vue";
import italiaImg from "../../../assets/images/content/home-blog/italia.jpg";
import flyImg from "../../../assets/images/content/home-blog/fly.png";
import travelAloneImg from "../../../assets/images/content/home-blog/travel-alone.png";
import indiaImg from "../../../assets/images/content/home-blog/india.png";

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
</script>

<style scoped>
.root-bg {
  background-color: rgba(243, 245, 244, 1);
}
.root-component {
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

/* Контейнер карусели с горизонтальным скроллом */
.karusel-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

/* Скрываем скроллбар */
.karusel-container::-webkit-scrollbar {
  display: none;
}

/* Для Firefox */
.karusel-container {
  scrollbar-width: none;
}

/* Сама карусель */
.karusel {
  display: flex;
  gap: 16px;
  padding: 4px 16px;
}
.karusel-item {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(100% - 32px);
  height: 496px;
  background-position: center;
  background-size: cover;
  scroll-snap-align: start;
}

.buttons-dark {
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .root-component {
    padding: 80px 0;
  }
  .karusel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .description-title {
    text-align: center;
    font-size: 24px;
  }
  .component-title {
    text-align: center;
    font-size: 32px;
  }
}
</style>
