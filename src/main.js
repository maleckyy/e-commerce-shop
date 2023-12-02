import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faCartPlus,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping, faCartPlus, faCircleInfo);
const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);

app.mount("#app");
