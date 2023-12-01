<template>
  <p>hp</p>
  <a></a>
  <router-view></router-view>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
  created() {
    this.$store.dispatch("getItemsFromAPI");
  },
  mounted() {
    console.log(this.items);
  },
};
</script>

<style scoped>
@import "./style.css";
p {
  color: var(--color-blue);
}
</style>
