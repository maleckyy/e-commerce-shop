<template>
  <div class="navbar">
    <div class="logo">LOGO</div>
    <ul>
      <li>
        <router-link class="hover-underline-animation" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="hover-underline-animation" to="/">Shop</router-link>
      </li>
      <li>
        <router-link to="/cart">
          <font-awesome-icon class="icon" icon="fa-solid fa-cart-shopping" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  /* background: var(--color-blue); */
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
  color: red;
}
.icon {
  transition: all 0.2s;
}
.icon:hover {
  transform: scale(1.1);
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
</style>
