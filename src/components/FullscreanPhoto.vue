<template>
  <Transition appear mode="in-out">
    <div class="container" @click="closeWindow">
      <img :src="image" :alt="alt" />
    </div>
  </Transition>
</template>

<script>
export default {
  props: ["image", "alt"],
  emits: ["closeWindow"],

  methods: {
    closeWindow() {
      this.$emit("closeWindow");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 0 auto;
  max-width: 100vw;
  max-height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.357);
  z-index: 1;
  padding: 1rem;
}
img {
  max-width: 93%;
  max-height: 93%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.07s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
