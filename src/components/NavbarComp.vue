<template>
  <div class="navbar">
    <div class="logo">E-SHOP</div>
    <ul>
      <li>
        <router-link class="hover-underline-animation" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="hover-underline-animation" to="/">Shop</router-link>
      </li>
      <li>
        <router-link to="/cart" class="cart-item">
          <font-awesome-icon class="icon" icon="fa-solid fa-cart-shopping" />
          <div class="counter">
            <p>
              {{ itemsCount }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    itemsCount() {
      const count = this.$store.getters.getCartItemsCount;
      if (count > 9) {
        return "9+";
      } else {
        return count;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  max-width: 100%;
}
ul {
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}
li {
  font-family: var(--font-mont);
  font-weight: 600;
  font-size: 1.4rem;
}
a {
  text-decoration: none;
  color: var(--color-black);
  transition: all 0.2s;
}
a:hover {
  color: var(--color-blue);
}
div.logo {
  color: var(--color-black);
  font-size: 2rem;
  font-family: "Dhurjati", sans-serif;
}
.icon {
  transition: all 0.2s;
}
.icon:hover {
  transform: scale(1.1);
}
.cart-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.counter {
  background-color: var(--color-blue);
  font-family: var(--font-mont);
  font-weight: 400;
  position: absolute;
  right: -10px;
  bottom: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 3px;
  font-size: 12px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
}
.counter > p {
  padding: 1rem;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: var(--color-black);
}
.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-blue);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media screen and (max-width: 400px) {
  .navbar {
    padding: 0.5rem 0.7rem;
  }
  ul {
    gap: 1.5rem;
  }
  li {
    font-size: 0.8rem;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
