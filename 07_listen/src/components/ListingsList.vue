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
import { mapActions } from "vuex";
import ListingsListItem from "./ListingsListItem";
import Notification from "./Notification";

export default {
  name: "ListingsList",
  props: ["listings", "isDark"],
  data() {
    return {
      notification: null,
    };
  },
  methods: {
    ...mapActions(["resetListings"]),
  },
  components: {
    ListingsListItem,
    Notification,
  },
  mounted() {
    this.notification = "Herzlichen Willkommen!";

    setTimeout(() => {
      this.notification = null;
    }, 3000);
  },
};
</script>
