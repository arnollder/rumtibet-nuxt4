<template>
  <div class="root-header">
    <div :class="rootContainer">
      <div :class="headerLine">
        <img class="header-logo" :class="hederLogo" src="../assets/images/logo.svg" alt="logo" />
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
      <a v-if="isMobile || isTablet" class="buttons-white" href="#"
        >Найти программу</a
      >

      <form v-if="isDesktop" class="heder-form">
        <fieldset class="form-fiedset">
          <select class="form-point custom-arrow" name="location">
            <option value="" disabled selected>Локация для тура</option>
            <option class="option-black" value="sea">море</option>
            <option class="option-black" value="goa">горы</option>
          </select>
          <p class="form-point-sign">выберите из списка</p>
        </fieldset>
        <fieldset class="form-fiedset">
          <select class="form-point custom_date" name="location">
            <option value="" disabled selected>Дата похода</option>
            <option class="option-black" value="sea">зима</option>
            <option class="option-black" value="goa">лето</option>
            <option class="option-black" value="goa">осень</option>
            <option class="option-black" value="goa">весна</option>
          </select>
          <p class="form-point-sign">укажите диапазон</p>
        </fieldset>
        <fieldset class="form-fiedset">
          <select class="form-point custom-arrow" name="location">
            <option value="" disabled selected>Участники</option>
            <option class="option-black" value="4">4</option>
            <option class="option-black" value="5">5</option>
            <option class="option-black" value="6">6</option>
            <option class="option-black" value="7">7</option>
            <option class="option-black" value="8">8</option>
          </select>
          <p class="form-point-sign">минимум 4 человека</p>
        </fieldset>
        <button class="buttons-white" type="submit">Найти программу</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { breakpoint } = useViewport();

const isMobile = computed(() => breakpoint.value === "mobile");
const isTablet = computed(() => breakpoint.value === "tablet");
const isDesktop = computed(() => breakpoint.value === "desktop");

const hederLogo = computed(() => ({
  'heder-logo-mobile': isMobile.value || isTablet.value,
  'heder-logo-desktop': isDesktop.value,
}))
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
.heder-logo-mobile {
  width: 84px;
  height: 44px;
}
.heder-logo-desktop {
  width: 137px;
  height: 72px;
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
.heder-form {
  padding: 40px;
  display: flex;
  column-gap: 24px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.form-fiedset {
  border: none;
}
.form-point {
  width: 270px;
  height: 52px;
  padding: 14px 16px;
  border-radius: 8px;
  border: none;
  border: 1px solid white;
  background: transparent;
  color: white;
  font-family: "NunitoSans";
  font-weight: 700;  
  cursor: pointer;
  
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position: right 16px center;
}
.form-point-sign {
  padding: 8px;
  color: white;
  font-family: "NunitoSans";
  font-weight: 400;
  font-size: 14px;
}
.custom-arrow {
  background-image: url("../assets/images/custom_arrow-down.svg");
}
.custom_date {
  background-image: url("../assets/images/custom_date.svg");
}
.option-black {
  color: black;
}
.buttons-white {
  width: 213px;
  height: 52px;
  cursor: pointer;
}
</style>
