<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent v-for="event in day.events" :key="event.title" :event="event"></CalendarEvent>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
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
        default: function ()  {
            return {
                id: -1,
                fullName: "Fehlender Wochentag",
                events: [],
            };
        }
    },
    // Validatoren (optional)
    validator: function (value) {
        if (Object.keys(value).includes('id')) { return true; }
    },
  },
};
</script>

<style scoped></style>
