<template>
  <div class="root-header">
    <div class="header-line">
      <img src="../assets/images/logo.svg" alt="logo" />
      <nav v-if="headerMenu" class="header-menu">
        <ul class="header-list">
          <img
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
        </ul>
      </nav>
      <img
        @click="toggleHeaderMenu"
        src="../assets/images/burger.svg"
        alt="burger-menu"
      />
    </div>
    <h2 class="header-title">
      Насладись прогулкой в горы с&nbsp;командой единомышленников
    </h2>
    <a class="buttons" href="#">Найти программу</a>
  </div>
</template>

<script setup lang="ts">
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
.header-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  margin-top: 298px;
  margin-bottom: 32px;
  color: white;
  text-transform: uppercase;
  font-family: "NEXT_ART_Bold";
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
}
.buttons {
  font-family: "NunitoSans";
  font-weight: 700;
  color: rgba(26, 62, 62, 1);
  background-color: white;
}
.header-list {
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
.close-btn {
  width: 24px;
  height: 24px;
  display: flex;
  margin-left: auto;
}
</style>
