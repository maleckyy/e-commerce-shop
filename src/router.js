import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "", component: HomePage },
    // { path: "/login", component: LoginPage },
    // { path: "/register", component: RegisterPage },
    // // { path: "/edit/:id", component: EditExpense, props: true },
    // // { path: "/cos/:id", component: variable, props: true, children: [] },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
