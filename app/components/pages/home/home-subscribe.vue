<template>
  <div :class="rootContainer">
    <div class="root-component">
      <div class="sticker">
        <div :class="title">
          <h2 class="description-title description-title-mobile">актуально</h2>
          <h2 class="component-title component-title-mobile">
            Получайте полезные рассылки о путешествиях
          </h2>
        </div>

        <form @submit.prevent="handleSubmit" class="subscribe-form">
          <label class="subscribe-title" for="subscribe-input"
            >Введите e-mail адрес</label
          >

          <fieldset class="subscribe-submit">
            <input
              class="subscribe-input"
              type="text"
              id="subscribe-input"
              name="user-input"
              placeholder="name@domain.com"
              required
            />
            <button class="buttons-dark" :class="buttons" type="submit">
              Подписаться на новости
            </button>
          </fieldset>

          <p class="subscribe-bottom">
            подписываясь на новости, вы автоматически соглашаетесь с условиями
            обработки персональных данных и правилами рекламных рассылок
          </p>
        </form>
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
const title = computed(() => ({
  "title-desktop": isDesktop.value,
}));
const buttons = computed(() => ({
  "buttons-dark-mobile": isMobile.value || isTablet.value,
  "buttons-dark-desktop": isDesktop.value,
}));

const handleSubmit = () => {
  alert("Подписка оформлена!");
};
</script>

<style scoped>
.root-component {
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.sticker {
  padding: 24px;

  display: flex;
  flex-direction: column;
  row-gap: 18px;

  border-radius: 6px;
  box-shadow: 0 0 15px rgba(24, 18, 30, 0.12);
  background-color: white;
}
.subscribe-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.subscribe-title {
  font-family: "NunitoSans";
  font-weight: 600;
}
.subscribe-submit {
  display: flex;
  align-items: baseline;
  flex-direction: column;

  border: none;
}
.subscribe-input {
  margin-top: 8px;
  padding: 12px 16px;

  width: 90%;

  font-family: "NunitoSans";
  font-weight: 300;
  font-size: 14px;

  border: none;
  border-radius: 4px;

  background-color: rgba(243, 245, 244, 1);
}
.subscribe-bottom {
  text-align: left;
  font-family: "NunitoSans";
  font-weight: 600;

  border: none;
  background: none;
}
.buttons-dark {
  margin: 16px 0;
  border: none;
}
@media (min-width: 1024px) {
  .root-component {
    padding: 0;
  }
  .description-title, .component-title {
    text-align: left;
  }
  .sticker {
    margin-bottom: -90px;
    flex-direction: row;
    column-gap: 64px;
  }
  .subscribe-input {
    width: 280px;
  }
  .subscribe-submit {
    flex-direction: row;
    column-gap: 16px;
  }
}
</style>
