<template>
  <div class="card">
    <div class="img-div">
      <img :src="item.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped></style>
