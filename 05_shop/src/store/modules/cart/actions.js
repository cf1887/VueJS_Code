export const actions = {
    addItemToCart(context, payload) {
        context.commit('addCartItem', {
            productId: payload.productId,
        });
    }
};