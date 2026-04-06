<template>
  <div class="report-img" :style="bgImg"></div>
</template>

<script setup lang="ts">
interface IReportImgProps {
    bgImg: string;
}
const props = defineProps<IReportImgProps>();
const bgImg = computed(() => ({
  backgroundImage: `url(${props.bgImg})`,
}));
</script>

<style scoped>
.report-img {
    width: 280px;
    height: 250px;

    background-position: center;
    background-size: cover;

    border-radius: 6px;
}
</style>
