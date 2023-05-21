import { createApp } from 'vue'
import App from './App.vue'
import Logger from './mixins/Logger';
import Focus from './directives/Focus';

const app = createApp(App);
app.mixin(Logger);
app.directive("focus", Focus);
app.mount('#app');
