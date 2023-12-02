<template>
  <div class="products-container">
    <div class="title">Featured Products</div>
    <div class="sub-title">Check out our latest products!</div>
    <div class="items-wrapper">
      <card v-for="item in items" :item="item" :key="item.id"></card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    card: Card,
  },
  methods: {
    async loadData() {
      await this.$store.dispatch("getItemsFromAPI");
    },
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
  created() {
    this.loadData();
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

.items-wrapper {
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
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
