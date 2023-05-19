<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Anfang: Template für die Calendar-Day-Component -->
      <CalendarDay v-for="calendarDay in calendarWeekData" :key="calendarDay.id" :day="calendarDay"></CalendarDay>
      <!-- Ende: Template für die Calendar-Day-Component -->
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
import Store from "../store";
export default {
  // Guter Stil: Jede Component sollte einen Namen haben.
  name: "CalendarWeek",
  components: {
    CalendarDay
  },
  data: function () {
    return {
      calendarWeekData: Store.state.calendarWeekData
    };
  }
};
</script>

<!-- Normalerweise ist es bei Vue so, dass Styles IMMER global zur Verfügung stehen - auch dann, wenn sie innerhalb einer Component definiert sind. -->
<!-- Das Schlüsselwort 'scoped' bewirkt, dass Styles, die nur in dieser Klasse definiert sind, NICHT global sondern nur innerhalb dieser Component zur Verfügung stehen. -->
<style scoped></style>
