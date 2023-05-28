import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';

const app = createApp(App);
// Verwende den Store von Vuex global (als Plugin)
app.use(store);
app.use(router);
app.mount('#app');
