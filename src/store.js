import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [],
      cart: [
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
      ],
    };
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    addToCart(state, payload) {
      state.cart.push(payload);
    },
  },
  actions: {
    async getItemsFromAPI(context) {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log("Failed to fetch");
        return false;
      }
      const responseData = await response.json();
      console.log(responseData);
      context.commit("setItems", responseData);
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getCartItems(state) {
      return state.cart;
    },
  },
});

export default store;
