<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      :class="cardHeaderClasses"
      role="button"
      @click="setActiveDay()"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <transition name="fade" mode="out-in">
        <div v-if="day.events.length">
          <transition-group name="list">
            <!-- <CalendarEvent
              v-for="event in events"
              :key="event.title"
              :event="event"
              :day="day"
            > -->
            <CalendarEvent
              v-for="(event, index) in events"
              :key="event.title + index"
              :event="event"
              :day="day"
            >
              <template #eventPriority="slotProps"
                ><h5>{{ slotProps.priorityDisplayName }}</h5></template
              >
              <template #default="{ event: entry }">
                {{ entry.title }}</template
              >
            </CalendarEvent>
          </transition-group>
        </div>
        <div v-else>
          <div class="alert alert-light text-center">
            <i>Keine Termine</i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
import Store from "../store";
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  // Datenfelder (Properties)
  props: {
    // Day-Objekt wie folgt:
    day: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: -1,
          fullName: "Fehlender Wochentag",
          events: [],
        };
      },
    },
    // Validatoren (optional)
    validator: function (value) {
      if (Object.keys(value).includes("id")) {
        return true;
      }
    },
  },
  computed: {
    cardClasses: function () {
      return this.day.id === Store.getters.activeDay().id
        ? ["border-primary"]
        : null;
    },
    cardHeaderClasses: function () {
      return this.day.id === Store.getters.activeDay().id
        ? ["bg-primary", "text-white"]
        : null;
    },
    events: function () {
      return Store.getters.events(this.day.id);
    },
  },
  methods: {
    setActiveDay() {
      Store.mutations.setActiveDay(this.day.id);
    },
  },
};
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
