<template>
  <div class="card h-100" :class="{ 'bg-dark': darkMode, 'bg-light': !darkMode }">
    <img :src="listing.image" class="card-img-top" />
    <div class="card-body">
      <h5
        class="card-title"
        :class="{ 'text-white': darkMode, 'text-black': !darkMode }"
      >
        {{ listing.title }}
      </h5>
      <small
        class="card-text"
        :class="{ 'text-white': darkMode, 'text-black': !darkMode }"
      >
        {{ listing.address }}
      </small>
      <p
        class="card-text mt-2"
        :class="{ 'text-white': darkMode, 'text-black': !darkMode }"
      >
        {{ listing.description }}

        <br />
      </p>

      <div class="my-3 text-center">
        <small :class="{ 'text-white': darkMode, 'text-black': !darkMode }">
          <span>€{{ listing.price / 100 }}/Tag</span> ·
          <span>Bewertung: {{ listing.rating }}/5</span>
        </small>
      </div>
      <div class="card-footer text-muted text-center">
        <button
          class="btn"
          :class="{
            'btn-outline-light': darkMode,
            'btn-outline-danger': !darkMode,
          }"
          @click="removeListing(listing)"
        >
          Entfernen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
// import useNotification from "@/hooks/useNotification";
import useDarkMode from "@/hooks/useDarkMode";
// import { mapActions } from "vuex";

export default {
  name: "ListingsListItem",
  props: ["listing"],
  setup(props) {
    // Store
    const store = useStore();
    // Methods
    // const { setNotification } = useNotification();
    const { darkMode } = useDarkMode();
    const removeListing = () => {
        // setNotification("Element von der Liste entfernt.");
        store.dispatch("removeListing", props.listing);
    }
    return {
        darkMode,
        removeListing,
    };
  },
//   methods: {
//     ...mapActions(["removeListing"]),
//   },
};
</script>
