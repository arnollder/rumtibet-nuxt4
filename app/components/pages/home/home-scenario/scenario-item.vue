<template>
  <div :style="bgImg">
    <div class="round-star">
      <img src="../../../../assets/images/ic_round-star.svg" alt="" />{{
        props.round
      }}
    </div>
    <div class="scenario-info">
      <div class="scenario-text">
        <p class="scenario-title">{{ props.title }}</p>
        <p v-if="isDesktop" class="scenario-description">
          {{ props.description }}
        </p>
      </div>
      <p class="scenario-price">{{ props.price }} $</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { breakpoint } = useViewport();

const isDesktop = computed(() => breakpoint.value === "desktop");

interface IScenarioProps {
  round: string;
  title: string;
  description: string;
  price: number;
  bgImg: string;
}

const props = defineProps<IScenarioProps>();

const bgImg = computed(() => ({
  backgroundImage: `url(${props.bgImg})`,
}));
</script>

<style scoped>
.round-star {
  margin-top: 36.8px;
  margin-left: auto;
  height: 32px;
  width: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  font-family: "NunitoSans";
  font-weight: 700;

  background-color: rgba(253, 253, 253, 0.4);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.scenario-info {
  margin-top: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
}
.scenario-title {
  font-family: "NunitoSans";
  font-weight: 700;
  font-size: 18px;
  color: white;
}
.scenario-description {
  font-family: "NunitoSans";
  font-weight: 400;
  font-size: 14px;
  color: white;
}
.scenario-price {
  height: 30px;
  width: 67px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NunitoSans";
  font-weight: 700;
  font-size: 16px;
  color: white;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

@media (min-width: 1024px) {
  .scenario-info {
    height: 90px;
  }
  .scenario-title {
    font-size: 24px;
  }
  .scenario-price {
    padding: 8px 16px;
    font-size: 20px;
  }
}
</style>
