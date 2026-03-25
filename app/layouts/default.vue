<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from './app-footer.vue';
import AppHeader from './app-header.vue';

</script>

<style scoped></style>
