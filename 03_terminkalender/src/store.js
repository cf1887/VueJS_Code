import { calendarWeekData } from "./seed";
// Funktion zum Hinzufügen eines Objekts in das Vue-Reactivity-System
import { reactive } from "vue";
// Funktion zum Readonly-Access eines Objekts innerhalb des Vue-Reactivity-Systems
import { readonly } from "vue";

const state = reactive({
  calendarWeekData,
});

const getters = {
    activeDay: () => state.calendarWeekData.find((day) => day.active),
};

const mutations = {
    editEvent(dayId, eventTitle) {
        // Setze erstmal alle Edit-Attribute auf false, sodass immer nur ein Event zur Zeit auf True ist
        state.calendarWeekData.map((dayObj) => {
            dayObj.events.forEach((event) => event.edit = false);
        });
        // Setze dieses Event auf true
        const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
        const eventObj = dayObj.events.find((event) => event.title === eventTitle);
        eventObj.edit = true;
    },
    updateEvent(dayId, oldEventTitle, newEvent) {
        newEvent.title = newEvent.title !== "" ? newEvent.title : oldEventTitle;
        const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
        const eventObj = dayObj.events.find((event) => event.title === oldEventTitle);
        eventObj.title = newEvent.title;
        eventObj.priority = Number(newEvent.priority);
        eventObj.edit = false;
    },
    deleteEvent(dayId, eventTitle) {
        const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
        const eventIndex = dayObj.events.findIndex((event) => event.title === eventTitle);
        dayObj.events.splice(eventIndex, 1);
    },
    setActiveDay(dayId) {
        state.calendarWeekData.map((dayObj) => dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false));
    }
};

export default {
// Sorge dafür, dass die Daten des oben definierten States nicht einfach so überschrieben werden können (dafür sind schließlich die Mutations da)
  state: readonly(state),
  getters,
  mutations,
};
