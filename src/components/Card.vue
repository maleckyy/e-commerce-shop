<template>
  <div class="card">
    <div class="img-div">
      <img :src="item.image" alt="" />
    </div>
    <div class="item-title">
      {{ item.title }}
    </div>
    <div class="item-values">
      <div class="item-numbers">
        <p>Rating: {{ item.rating.rate }}</p>
        ${{ item.price }}
      </div>
      <!-- DODAC BUTTON KOSZYCZKA -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.312);
  margin: auto;
  padding: 15px;
  border-radius: 16px;
  width: 225px;
  height: 290px;
}
.img-div {
  display: flex;
  align-items: center;
  color: var(--color-grey);
  height: 7rem;
  overflow: hidden;
}
img {
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.item-title {
  margin: 10px auto;
  font-family: var(--font-play);
  font-size: 1rem;
  font-weight: 600;
}
.item-values {
  font-family: var(--font-mont);
  font-weight: 600;
  color: #216d68;
}
p {
  font-family: var(--font-mont);
  font-weight: normal;
  letter-spacing: 1px;
}
</style>
