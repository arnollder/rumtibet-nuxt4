<template>
  <div :class="rootContainer">
    <div class="root-component">
      <div :class="title">
        <h2 class="description-title description-title-mobile">
          по версии отдыхающих
        </h2>
        <h2 class="component-title component-title-mobile">
          Популярные направления
        </h2>
      </div>

      <div class="karusel-container">
        <div class="karusel">
          <ScenarioItem
            class="karusel-item"
            v-for="item in scenarioList"
            :key="item.id"
            :round="item.round"
            :title="item.title"
            :description="item.description"
            :price="item.price"
            :bgImg="item.bgImg"
          />
        </div>
      </div>

      <a class="buttons-dark" :class="buttons" href="#">Рейтинг направлений</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScenarioItem from "./home-scenario/scenario-item.vue";
import lakeImg from "../../../assets/images/content/home-scenario/lake.jpg";
import nightImg from "../../../assets/images/content/home-scenario/night.jpg";
import yogaImg from "../../../assets/images/content/home-scenario/yoga.jpg";

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

const scenarioList = [
  {
    id: 0,
    round: "4.9",
    title: "Озеро возле гор",
    description: "романтическое приключение",
    price: 480,
    bgImg: lakeImg,
  },
  {
    id: 1,
    round: "4.5",
    title: "Ночь в горах",
    description: "в компании друзей",
    price: 500,
    bgImg: nightImg,
  },
  {
    id: 2,
    round: "5.0",
    title: "Йога в горах",
    description: "для тех, кто забоится о себе",
    price: 230,
    bgImg: yogaImg,
  },
];
</script>

<style scoped>
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

/* Элементы карусели — на мобилке на всю ширину */
.karusel-item {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(100% - 32px);
  height: 400px;
  border-radius: 32px;
  background-position: center;
  background-size: cover;
  scroll-snap-align: start;
}
.round-star {
  margin-top: 36.8px;
  margin-left: auto;
  height: 32px;
  width: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  font-family: "NunitoSans";
  font-weight: 700;

  background-color: rgba(253, 253, 253, 0.4);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.buttons-dark {
  margin: 0 auto;
}

/* Для десктопа — показываем по 3 картинки */
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
  .karusel {
    gap: 20px;
  }
  .karusel-item {
    width: 380px;
    height: 500px;
  }
}
</style>
