// import { createStore } from "vuex";
import { reactive, readonly } from "vue";
import axios from "axios";
import useNotification from "@/hooks/useNotification";

const { setNotification } = useNotification();

const state = reactive({
    listings: [],
    loading: false,
});

const mutations = {
    updateListings:     (payload)   => (state.listings = payload),
    loadingPending:     ()          => (state.loading = true),
    loadingComplete:    ()          => (state.loading = false),

    /** VORHERIGE SCHREIBWEISE MIT VUEX */
    // UPDATE_LISTINGS(state, payload) {
    //     state.listings = payload;
    // },
    // LOADING_PENDING(state) {
    //     state.loading = true;
    // },
    // LOADING_COMPLETE(state) {
    //     state.loading = false;
    // },
};

const actions = {
    getListings: () => {
        mutations.loadingPending();
        return axios.get("/api/listings").then((response) => {
            mutations.updateListings(response.data);
            mutations.loadingComplete();
        });
    },
    removeListing: (listing) => {
        return axios.post("/api/listings/delete", listing).then((response) => {
            mutations.updateListings(response.data);
            setNotification("Element von der Liste entfernt.");
        });
    },
    resetListings: () => {
        return axios.post("/api/listings/reset").then((response) => {
            mutations.updateListings(response.data);
        });
    },
    // getListings({ commit }) {
    //     commit("LOADING_PENDING");
    //     return axios.get("/api/listings").then((response) => {
    //         commit("UPDATE_LISTINGS", response.data);
    //         commit("LOADING_COMPLETE");
    //     });
    // },
    // removeListing({ commit }, listing) {
    //     return axios.post("/api/listings/delete", listing).then((response) => {
    //         commit("UPDATE_LISTINGS", response.data);
    //         setNotification("Element von der Liste entfernt.");
    //     });
    // },
    // resetListings({ commit }) {
    //     return axios.post("/api/listings/reset").then((response) => {
    //         commit("UPDATE_LISTINGS", response.data);
    //     });
    // },
};

// const getters = {
//     listings: (state) => state.listings,
//     loading: (state) => state.loading,
// };

export default {
    state: readonly(state),
    mutations,
    actions,
    // getters,
};
