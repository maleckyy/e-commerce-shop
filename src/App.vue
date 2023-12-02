<template>
  <navbar-comp></navbar-comp>
  <router-view></router-view>
</template>
<!-- referencja -->
<!-- https://dribbble.com/shots/19614098-E-Commerce-website-e-commerce-Product-Page -->

<script>
import NavbarComp from "./components/NavbarComp.vue";
export default {
  components: {
    NavbarComp,
  },
};
</script>

<style>
@import "./style.css";
</style>
