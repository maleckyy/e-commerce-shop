<template>
  <div class="home-wrapper">
    <hero-component></hero-component>
    <products></products>
  </div>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import Products from "../components/Products.vue";
export default {
  components: { Products, HeroComponent },
};
</script>

<style scoped>
.home-wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
}
</style>
