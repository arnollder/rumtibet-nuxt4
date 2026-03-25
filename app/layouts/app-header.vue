<template>
  <div class="root-header">
    <div class="header-line">
        <img src="../assets/images/logo.svg" alt="logo">
        <img src="../assets/images/burger.svg" alt="burger-menu">
    </div>
    <h2 class="header-title">Насладись прогулкой в горы с&nbsp;командой единомышленников</h2>
    <a class="buttons" href="#">Найти программу</a>
  </div>
</template>

<script setup lang="ts"></script>

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
  font-family: 'NEXT_ART_Bold';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
}
.buttons {  
  background-color: white;
}
</style>
