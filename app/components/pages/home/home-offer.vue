<template>
  <div class="root-bg">
    <div :class="rootContainer">
      <div :class="rootComponent">
        <section class="left-block">
          <div :class="textBlock">
            <div :class="title">
              <h2 class="description-title" :class="descriptionTitle">
                наше предложение
              </h2>
              <h2 class="component-title" :class="componentTitle">
                Лучшие программы для тебя
              </h2>
            </div>
            <p class="component-text" :class="componentText">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа.
            </p>
          </div>

          <div class="motivation-list">
            <div class="motivation-item">
              <img src="../../../assets/images/gid.svg" alt="" />
              <div class="motivation-article">
                <h2 class="motivation-title">Опытный гид</h2>
                <p class="motivation-text">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
              </div>
            </div>
            <div class="motivation-item">
              <img src="../../../assets/images/safe.svg" alt="" />
              <div class="motivation-article">
                <h2 class="motivation-title">Безопасный поход</h2>
                <p class="motivation-text">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
              </div>
            </div>
            <div class="motivation-item">
              <img src="../../../assets/images/price.svg" alt="" />
              <div class="motivation-article">
                <h2 class="motivation-title">Лояльные цены</h2>
                <p class="motivation-text">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
              </div>
            </div>
            <a class="buttons-dark" :class="buttons" href="#"
              >Стоимость программ</a
            >
          </div>
        </section>

        <section class="right-block">

        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { breakpoint } = useViewport();

const isMobile = computed(() => breakpoint.value === "mobile");
const isTablet = computed(() => breakpoint.value === "tablet");
const isDesktop = computed(() => breakpoint.value === "desktop");

const rootContainer = computed(() => ({
  "root-container": isDesktop.value,
}));
const rootComponent = computed(() => ({
  "root-component-mobile": isMobile.value || isTablet.value,
  "root-component-desktop": isDesktop.value,
}));
const title = computed(() => ({
  "title-desktop": isDesktop.value,
}));
const textBlock = computed(() => ({
  "text-block-mobile": isMobile.value || isTablet.value,
  "text-block-desktop": isDesktop.value,
}));
const descriptionTitle = computed(() => ({
  "description-title-mobile": isMobile.value || isTablet.value,
  "description-title-desktop": isDesktop.value,
}));
const componentTitle = computed(() => ({
  "component-title-mobile": isMobile.value || isTablet.value,
  "component-title-desktop": isDesktop.value,
}));
const componentText = computed(() => ({
  "component-text-mobile": isMobile.value || isTablet.value,
  "component-text-desktop": isDesktop.value,
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
.root-component-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.root-component-desktop {
  padding: 80px 0 100px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.left-block {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }
.component-text {
  margin-top: 32px;
}
.motivation-list {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.motivation-item {
  display: flex;
  align-items: start;
  column-gap: 16px;
}
.motivation-title {
  font-family: "NunitoSans";
  font-weight: 700;
  font-size: 18px;
}
.motivation-text {
  font-family: "NunitoSans";
  font-weight: 400;
  font-size: 14px;
}
.buttons-dark {
  margin: 0 auto;
}

@media screen and (min-width: 1200px) {
  .motivation-list {
    row-gap: 40px;
  }
  .component-text {
    margin-top: 40px;
  }
  .left-block {
    row-gap: 40px;
  }
}
</style>
