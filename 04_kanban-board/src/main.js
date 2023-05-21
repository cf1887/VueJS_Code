import { createApp } from 'vue'
import App from './App.vue'
import Logger from './mixins/Logger';

const app = createApp(App);
app.mixin(Logger);
app.mount('#app');
