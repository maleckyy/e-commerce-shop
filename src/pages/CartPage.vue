<template>
  <div class="cart-wrapper">
    <div class="title">Your cart</div>
    <div v-if="!isCartEmpty" class="value">
      Cart value: {{ allItemsValue }} $
    </div>
    <hr v-if="!isCartEmpty" />
    <div class="items-wrapper">
      <!-- lista koszyka -->
      <cart-item
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
      ></cart-item>
    </div>
    <hr v-if="!isCartEmpty" />
    <button v-if="!isCartEmpty">Order</button>
    <div v-if="isCartEmpty" class="info">Your cart is empty.</div>
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
      let res = 0;
      this.cartItems.forEach((item) => (res += item.price * item.quantity));

      return res.toFixed(2);
    },
    cartItems() {
      return this.$store.getters.getCartItems;
    },
    isCartEmpty() {
      if (this.cartItems.length == 0) {
        return true;
      } else {
        return false;
      }
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
.info {
  text-align: center;
  font-family: var(--font-play);
  color: var(--color-black);
  font-size: 1rem;
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
  padding: 0.5rem 2rem;
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
