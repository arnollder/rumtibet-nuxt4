<template>
  <div :class="rootContainer">
    <div :class="rootComponent">
      <div :class="textBlock">
        <div :class="title">
          <h2 class="description-title" :class="descriptionTitle">
            о нашем походе
          </h2>
          <h2 class="component-title" :class="componentTitle">
            Исследуйте все горные массивы мира вместе с нами
          </h2>
        </div>
        <p class="component-text" :class="componentText">
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых
          странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в
          классической латинской литературе.
        </p>
        <a class="buttons-dark" :class="buttons" href="#">Программа тура</a>
      </div>

      <div :class="mediaBlock">
        <div v-if="isDesktop" class="media-frame-desktop-only"></div>
        <div :class="mediaFrame">
          <img
            class="play-arrow"
            src="../../../assets/images/arrow-play.svg"
            alt=""
          />
        </div>
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
const mediaBlock = computed(() => ({
  "media-block-mobile": isMobile.value || isTablet.value,
  "media-block-desktop": isDesktop.value,
}));
const mediaFrame = computed(() => ({
  "media-frame-mobile": isMobile.value || isTablet.value,
  "media-frame-desktop": isDesktop.value,
}));
const buttons = computed(() => ({
  "buttons-dark-mobile": isMobile.value || isTablet.value,
  "buttons-dark-desktop": isDesktop.value,
}));
</script>

<style scoped>
.root-component-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.root-component-desktop {
  display: grid;
  grid-template-columns: repeat(2, 590px);
}
.title-desktop {
  padding-top: 64px;
}
.text-block-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.text-block-desktop {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  grid-column: 2;
}

.buttons-dark-mobile {
  margin: 0 auto;
}
.buttons-dark-desktop {
  margin: 0;
}
.media-block-mobile {
  margin-top: 16px;
}
.media-block-desktop {
  height: 526px;
  grid-column: 1;
  grid-row: 1;

  display: grid;
  grid-template-columns: repeat(4, 130px);
  grid-template-rows: repeat(4, 130px);
}
.media-frame-mobile {
  width: 100%;
  height: 416px;
  object-fit: cover;
  display: flex;
  background-image: url("../../../assets/images/content/hut.jpg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 24px;
}
.media-frame-desktop {
  display: flex;
  background-image: url("../../../assets/images/content/hut.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 350px;
  height: 400px;
  grid-column: 2;
  grid-row: 2;
}
.media-frame-desktop-only {
  background-image: url("../../../assets/images/content/mount.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 350px;
  height: 400px;
  border-radius: 24px;
}

.play-arrow {
  margin: auto;
}
</style>
