<template>
  <div :class="rootContainer">

    <div :class="rootComponent">
      
      <div class="text-block">
        <div class="title">
          <h2 class="description-title-mobile">о нашем походе</h2>
          <h2 class="component-title-mobile">
            Исследуйте все горные массивы мира вместе с нами
          </h2>
        </div>
        <p class="component-text-mobile">
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых
          странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в
          классической латинской литературе.
        </p>
        <a class="buttons-dark" href="#">Программа тура</a>
      </div>

      <div :class="mediaBlock">
        <div v-if="isDesktop" class="media-frame-desktop-only"></div>
        <div :class="mediaFrame">
          <img class="play-arrow" src="../../../assets/images/arrow-play.svg" alt="">
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
const mediaBlock = computed(() => ({
  "media-block-mobile": isMobile.value || isTablet.value,
  "media-block-desktop": isDesktop.value,
}));
const mediaFrame = computed(() => ({
  "media-frame-mobile": isMobile.value || isTablet.value,
  "media-frame-desktop": isDesktop.value,
}));
</script>

<style scoped>
.root-component-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.root-component-desktop {
  display: flex;
}
.text-block {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.buttons-dark {
  margin: 0 auto;
}
.media-block-mobile {
  margin-top: 16px;
}
.media-block-desktop {
  width: 480px;
  height: 526px;
  display: flex;
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
  background-image: url("../../../assets/images/content/hut.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 350px;
  height: 400px;
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
