import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import shopModule from "./modules/shop/index.js";

const store = createStore({
    modules: {
        auth: authModule,
        shop: shopModule,
    }
});

export default store;