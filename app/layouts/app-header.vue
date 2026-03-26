<template>
  <div class="root-header">
    <div :class="rootContainer">
      <div :class="headerLine">
        <img class="header-logo" src="../assets/images/logo.svg" alt="logo" />
        <nav class="header-menu">
          <ul v-if="headerMenu || isDesktop" :class="headerList">
            <img
              v-if="isMobile || isTablet"
              @click="toggleHeaderMenu"
              class="close-btn"
              src="../assets/images/close_icon.svg"
              alt="close"
            />
            <li><a href="#">Про гида</a></li>
            <li><a href="#">Программа тура</a></li>
            <li><a href="#">Стоимость</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
            <li v-if="isDesktop">
              <a class="buttons-dark" href="#">Консультация</a>
            </li>
          </ul>
        </nav>
        <img
          v-if="isMobile || isTablet"
          @click="toggleHeaderMenu"
          src="../assets/images/burger.svg"
          alt="burger-menu"
        />
      </div>
      <h2 :class="headerTitle">
        Насладись прогулкой в горы с&nbsp;командой единомышленников
      </h2>
      <a v-if="isMobile || isTablet" class="buttons-white" href="#">Найти программу</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { breakpoint } = useViewport();

const isMobile = computed(() => breakpoint.value === "mobile");
const isTablet = computed(() => breakpoint.value === "tablet");

const isDesktop = computed(() => breakpoint.value === "desktop");

const headerLine = computed(() => ({
  "header-line-mobile": isMobile.value || isTablet.value,
  "header-line-desktop": isDesktop.value,
}));
const headerList = computed(() => ({
  "header-list-mobile": isMobile.value || isTablet.value,
  "header-list-desktop": isDesktop.value,
}));
const rootContainer = computed(() => ({
  "root-container": isDesktop.value,
}));
const headerTitle = computed(() => ({
  "header-title-mobile": isMobile.value || isTablet.value,
  "header-title-desktop": isDesktop.value,
}));

const headerMenu = ref(false);
const toggleHeaderMenu = () => {
  headerMenu.value = !headerMenu.value;
  console.log(headerMenu.value);
};
</script>

<style scoped>
.root-header {
  padding: 20px 16px;
  background-image: url("../assets/images/background-header.webp");
  background-size: cover;
  background-position: center;
  min-height: 600px;
}
.header-logo {
  cursor: pointer;
}
.header-line-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-line-desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title-mobile {
  margin-top: 298px;
  margin-bottom: 32px;
  color: white;
  text-transform: uppercase;
  font-family: "NEXT_ART_Bold";
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
}
.header-title-desktop {
  margin-top: 298px;
  margin-bottom: 32px;
  color: white;
  text-transform: uppercase;
  font-family: "NEXT_ART_Bold";
  font-size: 50px;
  font-weight: 700;
  line-height: 1.5;
}
.header-list-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: fixed;
  top: 0;
  right: 0;
  width: 290px;
  height: 100vh;
  padding: 16px 16px;
  background-color: rgba(26, 62, 62, 1);
  color: white;
  font-family: "NunitoSans";
  font-weight: 400;
}
.header-list-desktop {
  display: flex;
  column-gap: 24px;
  color: white;
  font-family: "NunitoSans";
  font-weight: 600;
  font-size: 18px;
}
.close-btn {
  width: 24px;
  height: 24px;
  display: flex;
  margin-left: auto;
}
.buttons-dark {
  margin-left: 25px;
}
</style>
