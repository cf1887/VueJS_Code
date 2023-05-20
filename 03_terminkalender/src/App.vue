<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- Anfang: Template für die Calendar-Week-Component -->
        <CalendarWeek></CalendarWeek>
        <!-- Ende: Template für die Calendar-Week-Component -->
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <!-- Anfang: Template für die Calendar-Entry-Component -->
        <CalendarEntry></CalendarEntry>
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button class="btn btn-lg mb-2" :class="buttonSettingsClasses" @click="toggleDisplaySettings()">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- Anfang: Template für die Calendar-Settings-Component -->
        <CalendarSettings v-if="displaySettings"></CalendarSettings>
        <!-- Ende: Template für die Calendar-Settings-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarSettings from "./components/CalendarSettings.vue";
export default {
  name: "App",
  components: {
    // Langschreibweise:
    // 'CalendarWeek': CalendarWeek

    // Kurzschreibweise: CalendarWeek
    CalendarWeek,
    CalendarEntry,
    CalendarSettings,
  },
  data() {
    return {
      displaySettings: false
    }
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? ["btn-success"] : ["btn-outline-success"];
    }
  },
  methods: {
    toggleDisplaySettings() {
      this.displaySettings = !this.displaySettings;
    }
  }
};
</script>

<style>
/** Bootstrap importieren */
@import "~bootstrap/dist/css/bootstrap.min.css";
/** FontAwesome importieren */
@import "~@fortawesome/fontawesome-free/css/all.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
