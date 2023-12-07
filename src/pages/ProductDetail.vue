<template>
  <div class="wrapper" :class="{ blur: isPhotoOpen }">
    <button class="btn-back" @click="$router.push('../')">
      <font-awesome-icon icon="fa-solid fa-arrow-left" /> Go back
    </button>

    <div class="product">
      <div @click="zoomWindow" class="img-container">
        <img :src="item.image" />
      </div>

      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="price">${{ item.price }}</div>
        <div class="rating">
          Rating:
          {{ item.rating.rate }}({{ item.rating.count }})
        </div>
        <div class="desc">{{ item.description }}.</div>

        <div class="actions">
          <div class="icon-wrapper" @click="changeQ('odd')">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </div>
          <p class="quantity">{{ quantity }}</p>
          <div class="icon-wrapper" @click="changeQ('add')">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </div>
        </div>

        <button @click="addToCart" class="add">
          Add to Cart {{ quantity }} items
        </button>
      </div>
    </div>
  </div>
  <fullscrean-photo
    v-if="isPhotoOpen"
    @closeWindow="zoomWindow"
    :image="item.image"
    :alt="item.title"
  ></fullscrean-photo>
</template>

<script>
import FullscreanPhoto from "../components/FullscreanPhoto.vue";
export default {
  components: {
    FullscreanPhoto,
  },
  data() {
    return {
      quantity: 1,
      isPhotoOpen: false,
    };
  },
  computed: {
    item() {
      return this.$store.getters.getItemById(this.id);
    },
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    zoomWindow() {
      this.isPhotoOpen = !this.isPhotoOpen;
    },
    async loadData() {
      await this.$store.dispatch("getItemsFromAPI");
    },
    addToCart() {
      this.$store.commit("addToCart", {
        ...this.item,
        quantity: this.quantity,
      });
      this.$router.push("/cart");
    },
    changeQ(mode) {
      if (mode === "add") {
        this.quantity++;
      }
      if (mode === "odd") {
        if (this.quantity > 1) {
          this.quantity--;
        }
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
}
.blur {
  filter: blur(2px);
}
.product {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem 0;
  gap: 3rem;
}
.img-container {
  max-width: 30%;
}
img {
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--font-mont);
  color: var(--color-black);
  gap: 1rem;
}
.title {
  font-family: var(--font-play);
  font-size: 3rem;
  line-height: 120%;
  width: 100%;
}
.price {
  font-weight: 500;
  font-size: 2rem;
}
.rating {
  color: var(--color-grey);
}
.desc {
  font-size: 1.1rem;
  line-height: 135%;
  letter-spacing: -0.2px;
  max-width: 80%;
}
.btn-back {
  background-color: transparent;
  font-family: var(--font-mont);
  border: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}
.btn-back:hover {
  color: var(--color-blue-hover);
  margin-left: -5px;
}
.add {
  background: var(--color-white);
  border: 1px solid var(--color-black);
  padding: 0.5rem 0.9rem;
  color: var(--color-black);
  font-family: var(--font-mont);
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.2s;
}
.add:hover {
  color: var(--color-white);
  transform: scale(1.02);
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
}
.actions {
  margin: 2rem 0 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.icon-wrapper {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s;
  cursor: pointer;
}
.icon-wrapper:hover {
  transform: scale(1.19);
  color: var(--color-blue-hover);
}
.icon-wrapper:active {
  transform: scale(0.95);
  color: var(--color-blue);
}
.quantity {
  cursor: default;
  font-family: var(--font-mont);
  font-weight: 700;
  width: 30px;
  text-align: center;
}
@media only screen and (max-width: 1150px) {
  .wrapper {
    padding: 0 2rem;
  }
}
@media only screen and (max-width: 800px) {
  .wrapper {
    padding: 0 1.2rem;
  }
  .title {
    font-size: 2rem;
  }
  .price {
    font-size: 1.5rem;
  }
  .actions {
    transform: scale(1.2);
  }
}
@media only screen and (max-width: 560px) {
  .product {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-container {
    max-width: 80%;
    max-height: 380px;
  }
  .actions {
    align-self: center;
    margin: 2rem 0;
  }
  .desc {
    max-width: 100%;
  }
  .add {
    align-self: center;
    padding: 1rem;
    font-size: 1.3rem;
  }
}
</style>
