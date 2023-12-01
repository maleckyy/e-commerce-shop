<template>
  <div class="cart-item-wrapper">
    <div class="image-container">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-cat">{{ item.category }}</div>
      <div class="item-price">${{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.cart-item-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 3rem;
}
.image-container {
  height: 100%;
  max-height: 200px;
}
.image-container img {
  max-height: 100px;
  margin-right: 2rem;
}
.item-info {
  align-self: flex-start;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item-title {
  font-size: 1.3rem;
  font-family: var(--font-play);
}
.item-cat {
  font-family: var(--font-mont);
  letter-spacing: -0.7px;
  font-size: 1rem;
  color: var(--color-grey);
}
.item-price {
  color: var(--color-black);
  font-family: var(--font-mont);
  font-size: 1.2rem;
  letter-spacing: -0.7px;
  justify-self: flex-end;
}
</style>
