<template>
  <div class="hero-wrapper">
    <img
      class="image"
      src="https://images.unsplash.com/photo-1609873963526-48b4adb346a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
    <div class="content">
      <h1>Discover the best products from around the world!</h1>
    </div>
  </div>
</template>
<style scoped>
.hero-wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 2rem auto 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* overflow: hidden; */
}
.image {
  width: 450px;
  transition: all 0.2s;
}
.image:hover {
  transform: scale(1.02);
}
h1 {
  font-family: var(--font-play);
  font-weight: normal;
  letter-spacing: 1.3px;
  font-size: 4rem;
  padding: 0 2rem;
}
@media only screen and (max-width: 1440px) {
  .hero-wrapper {
    padding: 2rem 2rem 3rem;
  }
  h1 {
    font-size: 3rem;
  }
  .image {
    width: 30vw;
  }
}
@media only screen and (max-width: 1060px) {
  .hero-wrapper {
    padding: 2rem 1rem 3rem;
  }
}
@media only screen and (max-width: 800px) {
  .hero-wrapper {
    padding: 1rem 1rem 1rem;
  }
  h1 {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 420px) {
  .hero-wrapper {
    padding: 1rem 1rem 0rem;
  }
  h1 {
    font-size: 1.6rem;
  }
}
@media only screen and (max-width: 300px) {
  .hero-wrapper {
    padding: 0 1rem;
  }
  h1 {
    font-size: 1rem;
  }
}
</style>
