<template>
  <navbar-comp></navbar-comp>
  <p>hp</p>
  <a></a>
  <router-view></router-view>
</template>

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
