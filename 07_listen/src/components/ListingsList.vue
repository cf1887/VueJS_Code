<template>
    <div id="listings">
        <Notification :notification="notification" :isDark="isDark" />
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="listing in listings" :key="listing.id">
                <ListingsListItem :listing="listing" :isDark="isDark" />
            </div>
        </div>
        <button
            class="btn btn-primary mt-2"
            @click="resetListings"
            :disabled="listings.length === 3"
        >
            Reset
        </button>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
// import { mapActions } from "vuex";
import ListingsListItem from "./ListingsListItem";
import Notification from "./Notification";

export default {
    name: "ListingsList",
    components: {
        ListingsListItem,
        Notification,
    },
    props: ["listings", "isDark"],

    setup() {
        // Store:
        const store = useStore();
        // Data:
        const notification = ref(null);
        // Methods:
        const resetListings = () => store.dispatch("resetListings");
        // Mounted-Hook:
        onMounted(() => {
            notification.value = "Herzlich Willkommen!";
            setTimeout(() => {
                notification.value = null
            }, 3000);
        })
        return {
            notification,
            resetListings,
        };
    },

    // data() {
    //     return {
    //         notification: null,
    //     };
    // },
    // methods: {
    //     ...mapActions(["resetListings"]),
    // },
    
    // mounted() {
    //     this.notification = "Herzlichen Willkommen!";

    //     setTimeout(() => {
    //         this.notification = null;
    //     }, 3000);
    // },
};
</script>
