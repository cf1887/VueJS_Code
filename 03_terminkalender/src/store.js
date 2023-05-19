import { calendarWeekData } from "./seed";
// Funktion zum Hinzufügen eines Objekts in das Vue-Reactivity-System
import { reactive } from "vue";
// Funktion zum Readonly-Access eines Objekts innerhalb des Vue-Reactivity-Systems
import { readonly } from "vue";

const state = reactive({
  calendarWeekData,
});

const getters = {};

const mutations = {};

export default {
// Sorge dafür, dass die Daten des oben definierten States nicht einfach so überschrieben werden können (dafür sind schließlich die Mutations da)
  state: readonly(state),
  getters,
  mutations,
};
