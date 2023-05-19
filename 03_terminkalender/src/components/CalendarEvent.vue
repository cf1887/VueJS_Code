<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <div>
        <slot name="eventPriority">
            <!-- Alles, was zwischen dem öffnenden und dem schließenden Slot-tag steht, ist der sogenannte "FallbackContent". -->
            <!-- Ein FallbackContent ist der Inhalt, welcher (default) angezeigt wird, wenn der Slot NICHT von außen befüllt wird. -->
            <strong>{{ priorityDisplayName }}</strong>
        </slot>
      </div>
        <div>{{ event.title }}</div>
      <slot>
        
      </slot>

      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEvent",
  props: {
    event: {
        type: Object,
    }
  },
  computed: {
    priorityDisplayName: function () {
        switch (this.event.priority) {
            case 1: return "Tief";
            case 0: return "Mittel";
            case -1: return "Hoch";
        }
        return "Unbekannte Priority";
    },
    alertColor: function () {
        return "alert-" + this.event.color;
    }
  }
};
</script>

<style scoped></style>
