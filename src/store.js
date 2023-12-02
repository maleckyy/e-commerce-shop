import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [],
      cart: [],
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
