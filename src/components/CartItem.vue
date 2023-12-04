<template>
  <div class="cart-item-wrapper">
    <font-awesome-icon
      @click="deleteItem"
      class="delete-icon"
      icon="fa-solid fa-trash"
    />
    <div class="quantity-wrapper">
      <font-awesome-icon
        class="icon"
        icon="fa-solid fa-plus"
        @click="changeQ('add')"
      />
      <p class="quantity">{{ item.quantity }}</p>
      <font-awesome-icon
        class="icon"
        icon="fa-solid fa-minus"
        @click="changeQ('odd')"
      />
    </div>
    <div class="image-container">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-cat">{{ item.category }}</div>
      <div class="item-price">${{ item.price * item.quantity }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    deleteItem() {
      this.$store.commit("deleteFromCart", this.item.id);
    },
    changeQ(mode) {
      this.$store.commit("changeCartItemQuantity", {
        mode: mode,
        id: this.item.id,
      });
    },
  },
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
  height: 100px;
  width: 70px;
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
.delete-icon {
  color: red;
  font-size: 1.2rem;
  transition: all 0.2s;
}
.delete-icon:hover {
  transform: scale(1.08);
}
.quantity-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin: 0 1.3rem;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.068);
  border-radius: 20px;
}
.quantity {
  font-weight: bold;
  font-family: var(--font-mont);
}
@media screen and (max-width: 700px) {
  .cart-item-wrapper {
    padding: 0.8rem 1rem;
  }
}
@media screen and (max-width: 450px) {
  .cart-item-wrapper {
    padding: 0.8rem 0.1rem;
  }
  .image-container img {
    margin-right: 1rem;
  }
  .delete-icon {
    color: red;
    font-size: 1.4rem;
    transition: all 0.2s;
  }
  .quantity-wrapper {
    transform: scale(1.1);
    gap: 2px;
    margin: 0 0.8rem;
    padding: 8px;
  }
}
</style>
