<template>
  <div class="card h-100" :class="{ 'bg-dark': isDark, 'bg-light': !isDark }">
    <img :src="listing.image" class="card-img-top" />
    <div class="card-body">
      <h5
        class="card-title"
        :class="{ 'text-white': isDark, 'text-black': !isDark }"
      >
        {{ listing.title }}
      </h5>
      <small
        class="card-text"
        :class="{ 'text-white': isDark, 'text-black': !isDark }"
      >
        {{ listing.address }}
      </small>
      <p
        class="card-text mt-2"
        :class="{ 'text-white': isDark, 'text-black': !isDark }"
      >
        {{ listing.description }}

        <br />
      </p>

      <div class="my-3 text-center">
        <small :class="{ 'text-white': isDark, 'text-black': !isDark }">
          <span>€{{ listing.price / 100 }}/Tag</span> ·
          <span>Bewertung: {{ listing.rating }}/5</span>
        </small>
      </div>
      <div class="card-footer text-muted text-center">
        <button
          class="btn"
          :class="{
            'btn-outline-light': isDark,
            'btn-outline-danger': !isDark,
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
import { mapActions } from "vuex";

export default {
  name: "ListingsListItem",
  props: ["listing", "isDark"],
  methods: {
    ...mapActions(["removeListing"]),
  },
};
</script>
