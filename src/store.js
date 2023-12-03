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
      //loop po wszystkich elementach koszyka
      //jesli jest taki item z payload id to zwiekszamy jego quantity
      //jesli nie ma to push do koszyka

      state.cart.push(payload);
    },
    deleteFromCart(state, payload) {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    changeCartItemQuantity(state, payload) {
      if (payload.mode === "add") {
        state.cart.forEach((item) => {
          if (item.id === payload.id) {
            item.quantity++;
          }
        });
      }
      if (payload.mode === "odd") {
        state.cart.forEach((item) => {
          if (item.id === payload.id) {
            item.quantity--;
          }
        });
      }
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
    getCartItemsCount(state) {
      return state.cart.length;
    },
  },
});

export default store;
