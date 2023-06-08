<template>
    <div class="app" :class="{ 'bg-dark': darkMode }">
        <div class="container pt-5">
            <div v-if="loading">
                <div class="progress" style="height: 10px">
                    <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 60%"
                    ></div>
                </div>
            </div>
            <div v-if="!loading">
                <ListingsList :listings="listings" />
            </div>
            <button
                class="btn mt-2"
                :class="{ 'btn-light': darkMode, 'btn-dark': !darkMode }"
                @click="toggleDarkMode"
            >
                {{ darkModeButtonText }}
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
// import { mapGetters } from "vuex";
import useDarkMode from "@/hooks/useDarkMode";
import ListingsList from "./components/ListingsList";

export default {
    name: "App",
    components: {
        ListingsList,
    },
    // Wird ausgeführt, BEVOR die Component erzeugt wird und NACHDEM die Props verfügbar sind.
    setup() {
        // Das hier ist das ehemalige data-Attribut (in diesem Fall ist es ein primitiver Datentyp (bool)).
        // const isDark = ref(false);
        const { darkMode, toggleDarkMode } = useDarkMode();
        // Das hier sind die computed properties.
        // Hinweis: für den ...mapGetters()-Aufruf gibt es einen Workaround mit der useStore()-Funktion von vuex.
        const store = useStore();
        const darkModeButtonText = computed(() => {
            return darkMode.value ? "Helle Ansicht" : "Dunkle Ansicht";
        });
        const listings = computed(() => store.getters.listings);
        const loading = computed(() => store.getters.loading);
        // Das hier sind die methods.
        // const toggleDarkMode = () => {
        //     isDark.value = !isDark.value;
        // };
        // Das hier ist der created-Hook.
        // Da die setup()-Funktion der Composition-API bekanntlich ausgeführt wird,
        // BEVOR die Component erzeugt wird und NACHDEM die Props verfügbar sind,
        // ist diese Funktion quasi äquivalent zum 'created'-hook.
        store.dispatch("getListings");

        // Gib alles, was im Template verwendet werden soll, in diesem Objekt zurück.
        return {
            darkMode,
            darkModeButtonText,
            listings,
            loading,
            toggleDarkMode,
        };
    },

    /** VORHER MIT OPTIONS-API: */
    // data() {
    //     return {
    //         isDark: false,
    //     };
    // },
    // computed: {
    //     ...mapGetters(["listings", "loading"]),
    //     darkModeButtonText() {
    //         return this.isDark ? "Helle Ansicht" : "Dunkle Ansicht";
    //     },
    // },
    // methods: {
    //     toggleDarkMode() {
    //         this.isDark = !this.isDark;
    //     },
    // },
    // created() {
    //     this.$store.dispatch("getListings");
    // },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";

html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>

<style scoped>
.app {
    width: 100%;
    height: 100%;
}
</style>
