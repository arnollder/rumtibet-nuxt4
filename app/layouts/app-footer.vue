<template>
  <div class="root-footer">
    <div :class="rootContainer">
      <div :class="rootFooter">
        <div class="footer-about" :class="footerAboutDesktop">
          <div class="about-text">
            <h2 class="footer-title">Компания «РумТибет»</h2>
            <p class="footer-text">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney.
            </p>
          </div>
          <div class="about-contacts" :class="aboutContacts">
            <p>info@domain.com</p>
            <p>+7 (123) 456-78-90</p>
          </div>
          <div class="about-socnet">
            <img src="../assets/images/ic_baseline-telegram.svg" alt="" />
            <img
              src="../assets/images/entypo-social_vk-with-circle.svg"
              alt=""
            />
            <img src="../assets/images/mdi_pinterest.svg" alt="" />
            <img src="../assets/images/mdi_skype.svg" alt="" />
          </div>
        </div>

        <div class="footer-services">
          <h2 class="footer-title">Наши услуги</h2>
          <ul class="footer-list">
            <li class="footer-text li-wrapper">
              <img src="../assets/images/arrow-right.svg" alt="arrow-right" /><a
                href="#"
                >Прогулки в горы летом</a
              >
            </li>
            <li class="footer-text li-wrapper">
              <img src="../assets/images/arrow-right.svg" alt="arrow-right" /><a
                href="#"
                >Зимние походы в горы</a
              >
            </li>
            <li class="footer-text li-wrapper">
              <img src="../assets/images/arrow-right.svg" alt="arrow-right" /><a
                href="#"
                >Посещение храмов в горах</a
              >
            </li>
            <li class="footer-text li-wrapper">
              <img src="../assets/images/arrow-right.svg" alt="arrow-right" /><a
                href="#"
                >Экстремальные виды туризма</a
              >
            </li>
            <li class="footer-text li-wrapper">
              <img src="../assets/images/arrow-right.svg" alt="arrow-right" /><a
                href="#"
                >Походы в джунглях Амазонии</a
              >
              <img
                class="icon-new"
                src="../assets/images/icon-new.svg"
                alt="new"
              />
            </li>
            <li class="footer-text li-wrapper">
              <img src="../assets/images/arrow-right.svg" alt="arrow-right" /><a
                href="#"
                >Поездка в Африку</a
              >
            </li>
          </ul>
        </div>

        <div class="footer-article">
          <h2 class="footer-title">Важно для путешествий</h2>
          <div class="footer-list">
            <ul>
              <li class="footer-text li-wrapper">
                <img
                  src="../assets/images/arrow-right.svg"
                  alt="arrow-right"
                /><a href="#">Как собрать в долгий поход?</a>
              </li>
              <li class="footer-text li-wrapper">
                <img
                  src="../assets/images/arrow-right.svg"
                  alt="arrow-right"
                /><a href="#">Жизненно важные предметы для похода</a>
              </li>
              <li class="footer-text li-wrapper">
                <img
                  src="../assets/images/arrow-right.svg"
                  alt="arrow-right"
                /><a href="#">Медицинская страховка, гарантии безопасности</a>
              </li>
              <li class="footer-text li-wrapper">
                <img
                  src="../assets/images/arrow-right.svg"
                  alt="arrow-right"
                /><a href="#">Если вы врач - загляните сюда</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom-bg">
    <div :class="rootContainer">
      <div class="footer-bottom" :class="footerBottom">
        <p class="bottom-text">ИП Константинопольский К.К., 2023</p>
        <a href="#" class="bottom-text underline"
          >Политика обработки персональных данных</a
        >
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
const rootFooter = computed(() => ({
  "root-footer-mobile": isMobile.value || isTablet.value,
  "root-footer-desktop": isDesktop.value,
}));
const footerAboutDesktop = computed(() => ({
  "footer-about-desktop": isDesktop.value,
}));
const aboutContacts = computed(() => ({
  "about-contacts-desktop": isDesktop.value,
}));
const footerBottom = computed(() => ({
  "footer-bottom-desktop": isDesktop.value,
}));
</script>

<style scoped>
.root-footer-mobile {
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.root-footer-desktop {
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
}
.root-footer {
  display: flex;
  background-color: rgba(26, 62, 62, 1);
  font-family: "NunitoSans";
  color: white;
}
.footer-title {
  font-size: 20px;
  font-weight: 700;
}
.footer-about {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.footer-about-desktop {
  width: 450px;
}
.about-contacts {
  display: flex;
  column-gap: 24px;
}
.about-contacts-desktop {
  margin-top: 50px;
}
.about-socnet {
  display: flex;
  column-gap: 16px;
  cursor: pointer;
}
.footer-text {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
}
.services-list {
  margin-top: 20px;
}
.li-wrapper {
  max-width: 34ch;
  display: flex;
  column-gap: 8px;
  align-items: start;
  cursor: pointer;
}
.icon-new {
  margin-left: 8px;
}
.footer-bottom-bg {
  background-color: black;
}
.footer-bottom {
  padding: 20px 47px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  text-align: center;
  font-family: "NunitoSans";
  font-size: 14px;
  font-weight: 600;
  color: white;
}
.footer-bottom-desktop {
  padding: 24px 0;
  flex-direction: row;
  justify-content: space-between;
}
.underline {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .root-footer-desktop {
    margin-top: 90px;
  }
}
</style>
