<template>
  <div id="calender-week">
    <div class="card-group">
      <div class="card" v-for="i in 7" :key="i">
        <div class="card-header text-center" role="button">
          <strong>Montag</strong>
        </div>
        <div class="card-body">
          <!-- Anfang: Template für die Calendar-Day-Component -->
          <CalendarDay></CalendarDay>
          <!-- Ende: Template für die Calendar-Day-Component -->
        </div>
      </div>
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
