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
      <CalendarEvent
        v-for="event in day.events"
        :key="event.title"
        :event="event"
        :day="day"
      >
        <template #eventPriority="slotProps"
          ><h5>{{ slotProps.priorityDisplayName }}</h5></template
        >
        <template #default="{ event: entry }"> {{ entry.title }}</template>
      </CalendarEvent>
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
  },
  methods: {
      setActiveDay() {
        Store.mutations.setActiveDay(this.day.id);
      },
    },
};
</script>

<style scoped></style>
