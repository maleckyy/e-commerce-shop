import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";
import CartPage from "./pages/CartPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "", component: HomePage },
    { path: "/cart", component: CartPage },
    // { path: "/register", component: RegisterPage },
    // // { path: "/edit/:id", component: EditExpense, props: true },
    // // { path: "/cos/:id", component: variable, props: true, children: [] },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
