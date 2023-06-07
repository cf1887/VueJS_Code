import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import shopModule from "./modules/shop/index.js";
import cartModule from "./modules/cart/index.js";

const store = createStore({
    modules: {
        auth: authModule,
        shop: shopModule,
        cart: cartModule,
    }
});

export default store;