<template>
  <div class="products-container">
    <div class="title">Featured Products</div>
    <div class="sub-title">Check out our latest products!</div>
    <div v-if="isLoading" class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-if="!isLoading" class="items-wrapper">
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
    isLoading() {
      this.$store.getters.getLoadingStatus;
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: flex-start;
  gap: 1.2rem;
  width: 90%;
}

@media only screen and (max-width: 500px) {
  .title {
    font-size: 2rem;
  }
  .sub-title {
    font-size: 0.9rem;
  }
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #f4f4f4;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-blue-hover) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@media only screen and (max-width: 560px) {
  .lds-ring {
    transform: scale(0.7);
  }
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
