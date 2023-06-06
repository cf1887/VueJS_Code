import axios from "axios";

const state = {
    products: [],
};
const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },
    addProduct(state, payload) {
        state.products.push(payload);
    },
};
const actions = {
    fetchProducts(context) {
        const token = context.rootState.auth.token;
        axios
            .get(
                `https://vue-3-shop-backend-41920-default-rtdb.europe-west1.firebasedatabase.app/products.json?auth=${token}`
            )
            .then((response) => {
                const productsDO = [];
                for (const id in response.data) {
                    productsDO.push({
                        id: id,
                        ...response.data[id],
                    });
                }
                context.commit("setProducts", productsDO);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    storeProduct(context, payload) {
        const productItem = {
            title: payload.title,
            description: payload.description,
            price: payload.price,
        };
        const token = context.rootState.auth.token;
        axios
            .post(
                `https://vue-3-shop-backend-41920-default-rtdb.europe-west1.firebasedatabase.app/products.json?auth=${token}`,
                productItem
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                throw new Error(error);
            });
    },
};
const getters = {
    products: (state) => {
        return state.products;
    },

    // Syntax für Getter mit Argumenten (doppelte Arrow-Funktion).
    // In diesem Fall ist das Argument, welches dem Getter übergeben wird, die Id (sinngemäß: 'getProductById').
    product: (state) => (id) => {
        return state.products.find((product) => {
            if (product.id === id) {
                return product;
            }
        });
    },
};

const shopModule = {
    state,
    mutations,
    actions,
    getters,
};

export default shopModule;
