import * as types from "./mutation-types.js";

export const mutations = {
    [types.ADD_CART_ITEM](state, payload) {
        state.cartItems.push(payload);
    }
};