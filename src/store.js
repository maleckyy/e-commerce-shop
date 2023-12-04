import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [],
      cart: [],
      isItemsLoading: false,
    };
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    addToCart(state, payload) {
      const res = state.cart.find((item) => item.id === payload.id);
      if (res) {
        state.cart.forEach((item) => {
          if (item.id === payload.id) {
            item.quantity++;
          }
        });
      } else {
        state.cart.push(payload);
      }
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
            if (item.quantity > 1) item.quantity--;
          }
        });
      }
    },
  },
  actions: {
    async getItemsFromAPI(context) {
      context.state.isItemsLoading = true;
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log("Failed to fetch");
        return false;
      }
      const responseData = await response.json();
      context.state.isItemsLoading = false;
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
      let count = 0;
      state.cart.forEach((item) => (count += item.quantity));
      return count;
    },
    getItemById: (state) => (id) => {
      const res = state.items.find((item) => item.id == id);
      return res;
    },
    getLoadingStatus(state) {
      return state.isItemsLoading;
    },
  },
});

export default store;
