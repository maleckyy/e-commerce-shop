import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";
import CartPage from "./pages/CartPage.vue";
import ProductDetail from "./pages/ProductDetail.vue";

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHashHistory(),
  routes: [
    { path: "", component: HomePage },
    { path: "/cart", component: CartPage },
    // { path: "/register", component: RegisterPage },
    { path: "/products/:id", component: ProductDetail },
    // // { path: "/cos/:id", component: variable, props: true, children: [] },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
