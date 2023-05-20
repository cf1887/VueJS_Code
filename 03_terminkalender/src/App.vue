<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- Anfang: Template für die Calendar-Week-Component -->
        <!-- <CalendarListAsWeek></CalendarListAsWeek>
        <CalendarWeek></CalendarWeek> -->
        <keep-alive>
          <transition name="fade" mode="out-in" appear>
            <component :is="activeView"></component>
          </transition>
        </keep-alive>
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
          <button
            class="btn btn-lg mb-2"
            :class="buttonSettingsClasses"
            @click="toggleDisplaySettings()"
          >
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- Anfang: Template für die Calendar-Settings-Component -->
        <!-- <transition name="fade">
          <CalendarSettings v-if="displaySettings"></CalendarSettings>
        </transition> -->
        <transition
          enter-active-class="animate__animated animate__bounceInRight"
          leave-active-class="animate__animated animate__bounceOutRight"
        >
          <CalendarSettings v-if="displaySettings"></CalendarSettings>
        </transition>
        <!-- Ende: Template für die Calendar-Settings-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Store from "./store";
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarWeekAsList from "./components/CalendarWeekAsList.vue";
import CalendarEntry from "./components/CalendarEntry.vue";
// Dieser Import muss durch die defineAsyncComponent umgeschrieben werden
// import CalendarSettings from "./components/CalendarSettings.vue";
export default {
  name: "App",
  components: {
    // Langschreibweise:
    // 'CalendarWeek': CalendarWeek

    // Kurzschreibweise: CalendarWeek
    CalendarWeek,
    CalendarWeekAsList,
    CalendarEntry,
    // Hier wird asynchron die CalendarSettings-Component geladen (also nur dann, wenn sie auch wirklich gebraucht wird!)
    CalendarSettings: defineAsyncComponent(() => {
      return import("./components/CalendarSettings.vue");
    }),
  },
  data() {
    return {
      displaySettings: false,
    };
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? ["btn-success"] : ["btn-outline-success"];
    },
    activeView() {
      return Store.getters.activeView();
    },
  },
  methods: {
    toggleDisplaySettings() {
      this.displaySettings = !this.displaySettings;
    },
  },
};
</script>

<style>
/** Bootstrap importieren */
@import "~bootstrap/dist/css/bootstrap.min.css";
/** FontAwesome importieren */
@import "~@fortawesome/fontawesome-free/css/all.css";
/** Animate.css importieren */
@import "~animate.css/animate.min.css";

.square {
  width: 40px;
  height: 40px;
}

/**
* Transition: Fade
* Hat die Transition kein name-Attribut, ist der Name automatisch "v", also z.B. v-enter-form.
*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out;
}
</style>
