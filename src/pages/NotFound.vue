<template>
  <div class="wrapper">
    <div class="title">Page not found.</div>
    <router-link to="/">Go back to home page.</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  font-family: var(--font-mont);
  color: var(--color-black);
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
}
a {
  font-family: var(--font-mont);
  text-align: center;
  color: var(--color-black);
  /* text-decoration: none; */
}
</style>
