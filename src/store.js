import { createStore } from "vuex";
import ProductsModule from "./storeModules/ProductsModule";
import authModule from "./storeModules/authModule";

const store = createStore({
  modules: {
    ProductsModule,
    authModule,
  },
});

export default store;
