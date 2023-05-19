<template>
  <div id="calendar-day">
    <!-- Anfang: Template für die Calendar-Event-Component -->
    <CalendarEvent></CalendarEvent>
    <!-- Ende: Template für die Calendar-Event-Component -->
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue"
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent
  }
};
</script>

<style scoped></style>
