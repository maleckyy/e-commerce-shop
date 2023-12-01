<template>
  <div class="cart-wrapper">
    <div class="title">Your cart</div>
    <div class="value">Cart value: {{ allItemsValue }} $</div>
    <hr />
    <div class="items-wrapper">
      <!-- lista koszyka -->
      <cart-item
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
      ></cart-item>
    </div>
    <hr />
    <button>Order</button>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  computed: {
    allItemsValue() {
      return 10;
    },
    cartItems() {
      return this.$store.getters.getCartItems;
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}
.title {
  font-family: var(--font-play);
  color: var(--color-black);
  font-size: 2rem;
  text-align: left;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
}
.value {
  text-align: right;
  padding: 0.4rem 0;
  font-family: var(--font-mont);
  color: var(--color-black);
  font-size: 1.2rem;
}
hr {
  margin: 0.6rem 0;
}
button {
  font-family: var(--font-mont);
  color: var(--color-white);
  font-size: 1.3rem;
  letter-spacing: -0.3px;
  background-color: var(--color-blue);
  border-radius: 10px;
  border: 0;
  padding: 0.3rem 2rem;
  float: right;
  transition: all 0.2s;
}
button:hover {
  transform: scale(1.02);
  background-color: var(--color-blue-hover);
}
button:active {
  transform: scale(0.99);
  background-color: var(--color-blue-hover);
  opacity: 0.7;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.342);
}
@media only screen and (max-width: 1080px) {
  .cart-wrapper {
    padding: 0 2rem;
  }
}
</style>
