<template>
  <navbar class="navbar">
    <div class="logo">LOGO</div>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Shop</a></li>
      <li><a href="">Koszyk</a></li>
    </ul>
  </navbar>
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
  background: var(--color-blue);
  max-width: 100%;
}
ul {
  gap: 2rem;
  display: flex;
  align-items: center;
  list-style: none;
}
li {
  font-family: var(--font-mont);
  font-weight: 600;
}
a:hover {
  color: #216d68;
  text-decoration: underline;
}
a {
  text-decoration: none;
  color: var(--color-black);
}
div {
  color: red;
}

@media screen and (max-width: 400px) {
    .navbar{
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
