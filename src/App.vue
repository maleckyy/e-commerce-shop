<template>
  <div class="app" id="app">
    <navbar-comp></navbar-comp>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>
<!-- referencja -->
<!-- https://dribbble.com/shots/19614098-E-Commerce-website-e-commerce-Product-Page -->

<script>
import NavbarComp from "./components/NavbarComp.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    NavbarComp,
    TheFooter,
  },
};
</script>

<style>
@import "./style.css";
.app {
  min-height: 100vh;
  position: relative;
  padding-bottom: 200px;
}
</style>
