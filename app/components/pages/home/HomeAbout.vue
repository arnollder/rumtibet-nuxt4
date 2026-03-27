<template>
  <div class="root-component-mobile">
    <div class="title">
      <h2 class="description-title-mobile">о нашем походе</h2>
      <h2 class="component-title-mobile">
        Исследуйте все горные массивы мира вместе с нами
      </h2>
    </div>
    <p class="component-text-mobile">
      Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть
      более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из
      колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов
      в Lorem Ipsum, "consectetur"и занялся его поисками в классической
      латинской литературе.
    </p>
    <a class="buttons-dark" href="#">Программа тура</a>
    <div class="video">
        <img class="arrow-play" src="../../../assets/images/arrow-play.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.root-component-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.buttons-dark {
  margin: 0 auto;
}
.video {
  margin-top: 16px;
  min-height: 416px;
  display: flex;
  background-image: url("../../../assets/images/content/hut.jpg");
  border-radius: 24px;
  background-size: cover;
  background-position: center;
}
.arrow-play {
  margin: auto;
}
</style>
