import { createApp } from 'vue'
import App from './App.vue'
import Store from './store/index.js';
import store from './store/index.js';

const app = createApp(App);
// Verwende den Store von Vuex global (als Plugin)
app.use(store);

app.mount('#app');
