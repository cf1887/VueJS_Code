<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <!-- Template für den Fall, dass das CalendarEvent NICHT bearbeitet wird -->
      <transition name="fade">
        <div v-if="!event.edit">
          <div>
            <!-- Veröffentlichung der computed Property dieser Klasse für Slot-Befüllung -->
            <slot
              name="eventPriority"
              :priorityDisplayName="priorityDisplayName"
            >
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
            <i
              class="far fa-trash-alt"
              role="button"
              @click="deleteEvent()"
            ></i>
          </div>
        </div>
        <div v-else>
          <input
            type="text"
            class="form-control"
            :placeholder="event.title"
            @input="setNewEventTitle"
            ref="newEventTitleInput"
          />
          <select class="form-select mt-2" v-model="newEventPriority">
            <option value="-1">Hoch</option>
            <option value="0">Mittel</option>
            <option value="1">Tief</option>
          </select>
          <hr />
          <i class="fas fa-check" role="button" @click="updateEvent()"></i>
        </div>
      </transition>
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
  data: function () {
    return {
      newEventTitle: "",
      newEventPriority: this.event.priority,
    };
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
      // Da das Event-Handling asynchron ist, müssen wir (auf den nächsten Tick) warten, bevor wir das Input-element in den Fokus rücken können
      this.$nextTick(() => {
        // Greife auf Input-Element via Referenz zu (mihilfe von vue template refs)
        this.$refs.newEventTitleInput.focus();
      });
    },
    updateEvent: function () {
      Store.mutations.updateEvent(this.day.id, this.event.title, {
        title: this.newEventTitle,
        priority: this.newEventPriority,
      });
    },
    deleteEvent: function () {
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
    // Bei jeder Eingabe, setze den newEventTitle auf die Eingabe
    setNewEventTitle: function (event) {
      this.newEventTitle = event.target.value;
    },
  },
};
</script>

<style scoped></style>
