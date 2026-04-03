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

        <BlogItem
          :img="italiaImg"
          :title="'Красивая Италия, какая она&nbsp;в&nbsp;реальности?'"
          :text="'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'"
          :date="'01/04/2023'"
        />
        <BlogItem
          :img="flyImg"
          :title="'Долой сомнения! Весь мир открыт для вас!'"
          :text="'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'"
          :date="'01/04/2023'"
        />
        <BlogItem
          :img="travelAloneImg"
          :title="'Как подготовиться к путешествию в одиночку?'"
          :text="'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'"
          :date="'01/04/2023'"
        />
        <BlogItem
          :img="indiaImg"
          :title="'Индия ... летим?'"
          :text="'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'"
          :date="'01/04/2023'"
        />

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
}
</style>
