import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

/** VUEX-VARIANTE */
// createApp(App)
//   .use(store)
//   .mount("#app");

createApp(App)
  .provide("store", store)
  .mount("#app");
