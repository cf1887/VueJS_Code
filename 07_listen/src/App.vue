<template>
  <div class="app" :class="{ 'bg-dark': isDark }">
    <div class="container mt-5">
      <div v-if="loading">
        <div class="progress" style="height: 10px">
          <div class="progress-bar" role="progressbar" style="width: 60%"></div>
        </div>
      </div>
      <div v-if="!loading">
        <ListingsList :listings="listings" :isDark="isDark" />
      </div>
      <button
        class="btn mt-2"
        :class="{ 'btn-light': isDark, 'btn-dark': !isDark }"
        @click="toggleDarkMode"
      >
        {{ darkModeButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListingsList from "./components/ListingsList";

export default {
  name: "App",
  data() {
    return {
      isDark: false,
    };
  },
  computed: {
    ...mapGetters(["listings", "loading"]),
    darkModeButtonText() {
      return this.isDark ? "Helle Ansicht" : "Dunkle Ansicht";
    },
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
  },
  created() {
    this.$store.dispatch("getListings");
  },
  components: {
    ListingsList,
  },
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