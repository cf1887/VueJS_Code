<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <!-- Template für den Fall, dass das CalendarEvent NICHT bearbeitet wird -->
      <template v-if="!event.edit">
        <div>
          <!-- Veröffentlichung der computed Property dieser Klasse für Slot-Befüllung -->
          <slot name="eventPriority" :priorityDisplayName="priorityDisplayName">
            <!-- Alles, was zwischen dem öffnenden und dem schließenden Slot-tag steht, ist der sogenannte "FallbackContent". -->
            <!-- Ein FallbackContent ist der Inhalt, welcher (default) angezeigt wird, wenn der Slot NICHT von außen befüllt wird. -->
            <strong>{{ priorityDisplayName }}</strong>
          </slot>
        </div>
        <slot :event="event">
          <div>{{ event.title }}</div>
        </slot>

        <div>
          <i class="fas fa-edit me-2" role="button" @click="editEvent()"></i>
          <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
        </div>
      </template>
      <template v-else>
        <p>Moin!</p>
      </template>
    </div>
  </div>
</template>

<script>
import Store from "../store";
export default {
  name: "CalendarEvent",
  props: {
    event: {
      type: Object,
    },
    day: {
      type: Object,
    },
  },
  computed: {
    priorityDisplayName: function () {
      switch (this.event.priority) {
        case 1:
          return "Tief";
        case 0:
          return "Mittel";
        case -1:
          return "Hoch";
      }
      return "Unbekannte Priority";
    },
    alertColor: function () {
      return "alert-" + this.event.color;
    },
  },
  methods: {
    editEvent: function () {
      Store.mutations.editEvent(this.day.id, this.event.title);
    },
    deleteEvent: function () {
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
  },
};
</script>

<style scoped></style>
