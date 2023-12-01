<template>
  <div class="products-container">
    <div class="title">Featured Products</div>
    <div class="sub-title">Check out our latest products!</div>

    <div class="items-wrapper">
      <!-- lista itemków -->
      <!-- 
       -->

      <!-- 

        <compionent v-for="item in/of items" :item="item"></compionent>
            {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
        V
        W komponencie
        props:['item']
        :src=""

        div wraper @click=navigteDESC

        

PAMIETAMY O THIS.ITEM



        -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
  created() {
    this.$store.dispatch("getItemsFromAPI");
  },
  mounted() {
    console.log(this.items);
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}
.title {
  font-family: var(--font-play);
  color: var(--color-black);
  font-size: 3rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
}
.sub-title {
  color: var(--color-grey);
  font-family: var(--font-mont);
  letter-spacing: -0.4px;
  font-size: 1.2rem;
  text-align: center;
}

.item-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media only screen and (max-width: 500px) {
  .title {
    font-size: 2rem;
  }
  .sub-title {
    font-size: 0.9rem;
  }
  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
