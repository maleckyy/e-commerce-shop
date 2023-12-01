<template>
  <div class="home-wrapper">
    <div>homepage</div>
    <products></products>
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  components: { Products },
};
</script>

<style scoped>
.home-wrapper {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}
</style>
