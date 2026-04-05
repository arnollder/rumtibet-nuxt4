<template>
  <div :class="rootContainer">
    <div class="root-component">
      <div :class="title">
        <h2 class="description-title description-title-mobile">
          фото-отчет
        </h2>
        <h2 class="component-title component-title-mobile">
          Делимся впечатлениями
        </h2>
      </div>

        <a class="buttons-dark" :class="buttons" href="#">Наш pinterest</a>

    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style>
.root-component {
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.buttons-dark {
  margin: 0 auto;
}
</style>
