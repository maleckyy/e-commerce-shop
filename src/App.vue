<template>
  <navbar></navbar>
  <p>hp</p>
  <router-view></router-view>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
export default {
  components: {
    navbar: NavbarComp
  }
};
</script>

<style>
@import "./style.css";
p {
  color: var(--color-blue);
}
</style>
