<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Anfang: Template für die Calendar-Day-Component -->
      <CalendarDay v-for="i in 7" :key="i"></CalendarDay>
      <!-- Ende: Template für die Calendar-Day-Component -->
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue"
export default {
  // Guter Stil: Jede Component sollte einen Namen haben.
  name: "CalendarWeek",
  components: {
    CalendarDay
  }
};
</script>

<!-- Normalerweise ist es bei Vue so, dass Styles IMMER global zur Verfügung stehen - auch dann, wenn sie innerhalb einer Component definiert sind. -->
<!-- Das Schlüsselwort 'scoped' bewirkt, dass Styles, die nur in dieser Klasse definiert sind, NICHT global sondern nur innerhalb dieser Component zur Verfügung stehen. -->
<style scoped></style>
