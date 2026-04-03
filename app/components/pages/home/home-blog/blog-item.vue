<template>
  <div class="root-blog-item">
    <div :style="bgImg" class="blog-item-img"></div>
    <div class="content">
      <h3 class="content-title">{{ props.title }}</h3>
      <p class="content-text">{{ props.text }}</p>

      <div class="content-bottom">
        <p class="content-date">{{ props.date }}</p>
        <a class="content-read-all" href="#">читать статью</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBlogItemProps } from "../home-types";

const props = defineProps<IBlogItemProps>();
const bgImg = computed(() => ({
  backgroundImage: `url(${props.img})`,
}));
</script>

<style scoped>
.root-blog-item {
  width: 285px;

  display: flex;
  flex-direction: column;

  font-family: "NunitoSans";

  background-color: rgba(253, 253, 253, 1);
  border-radius: 10px;
}
.blog-item-img {
  height: 280px;
  background-position: center;
  background-size: cover;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.content {
  padding: 16px;
  height: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 10px;
}
.content-title {
  font-weight: 700;
  font-size: 20px;
}
.content-text {
  font-weight: 400;
  font-size: 14px;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content-bottom {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-date {
  font-weight: 700;
  color: rgba(242, 190, 34, 1);
}
.content-read-all {
  font-weight: 700;
  color: rgba(26, 62, 62, 1);
}

@media (min-width: 1024px) {
  .root-blog-item {
    padding: 16px;
    display: grid;
    grid-template-columns: 230px 294px;
    gap: 24px;
  }
  .blog-item-img {
    width: 230px;
    height: 280px;
    border-radius: 6px;
  }
  .content {
    height: 250px;
  }
}
</style>
