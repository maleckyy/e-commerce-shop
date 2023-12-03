<template>
  <div class="card">
    <font-awesome-icon
      @click="navigateToDetails"
      class="info"
      icon="fa-solid fa-circle-info"
    />
    <div class="img-div" @click="navigateToDetails">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="item-details">
      <div class="item-title">
        {{ item.title }}
      </div>
      <div class="price">$ {{ item.price }}</div>
      <div class="rating">
        <p>Rating: {{ item.rating.rate }} / ({{ item.rating.count }})</p>
      </div>
    </div>
    <button @click="addToCart">
      <font-awesome-icon class="icon" icon="fa-solid fa-cart-plus" /> Add to
      Cart
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    navigateToDetails() {
      this.$router.push(`/products/${this.item.id}`);
    },
    addToCart() {
      this.$store.commit("addToCart", { ...this.item, quantity: 1 });
    },
  },
};
</script>

<style scoped>
.card {
  align-self: flex-start;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.079);
  padding: 1rem;
  border-radius: 16px;
  width: 280px;
  height: 340px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
}
.img-div {
  align-self: center;
  display: flex;
  align-items: center;
  color: var(--color-grey);
  max-height: 9rem;
  min-height: 7rem;
  max-width: 8rem;
  overflow: hidden;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.item-title {
  font-family: var(--font-mont);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 120%;
}
.rating {
  font-family: var(--font-mont);
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--color-grey);
  align-self: flex-start;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border: 1px solid var(--color-black);
  padding: 0.5rem 0.7rem;
  color: var(--color-black);
  font-family: var(--font-mont);
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 50px;
  transition: all 0.2s;
}
button:hover {
  color: var(--color-white);
  transform: scale(1.02);
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
}
.icon {
  margin-right: 5px;
}
.price {
  margin: 3px 0;
  font-family: var(--font-mont);
  font-weight: 500;
}
.info {
  position: absolute;
  color: var(--color-blue);
  font-size: 1.2rem;
  transition: all 0.2s;
}
.info:hover {
  color: var(--color-blue-hover);
  transform: scale(1.06);
}
p {
  font-family: var(--font-mont);
  font-weight: normal;
  letter-spacing: 1px;
}
</style>
