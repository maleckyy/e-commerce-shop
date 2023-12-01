<template>
  <div class="products-container">
    <div class="title">Featured Products</div>
    <div class="sub-title">Check out our latest products!</div>

    <div class="items-wrapper">
    
 
    </div>
  </div>
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
.products-container {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}
.title {
  font-family: var(--font-play);
  color: var(--color-black);
  font-size: 3rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
}
.sub-title {
  color: var(--color-grey);
  font-family: var(--font-mont);
  letter-spacing: -0.4px;
  font-size: 1.2rem;
  text-align: center;
}

.item-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media only screen and (max-width: 500px) {
  .title {
    font-size: 2rem;
  }
  .sub-title {
    font-size: 0.9rem;
  }
  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
