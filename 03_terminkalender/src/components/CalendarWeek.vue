<template>
  <div id="calender-week">
    <div class="card-group">
      <div class="card" v-for="i in 7" :key="i">
        <div class="card-header text-center" role="button">
          <strong>Montag</strong>
        </div>
        <div class="card-body">
          <!-- Anfang: Template für die Calendar-Day-Component -->
          <div id="calendar-day">
            <!-- Anfang: Template für die Calendar-Event-Component -->
            <div id="calendar-event">
              <div class="alert text-center">
                <div>
                  <strong>Hoch</strong>
                </div>

                <div>Vue.js 3 lernen</div>

                <div>
                  <i class="fas fa-edit me-2" role="button"></i>
                  <i class="far fa-trash-alt" role="button"></i>
                </div>
              </div>
            </div>
            <!-- Ende: Template für die Calendar-Event-Component -->
          </div>
          <!-- Ende: Template für die Calendar-Day-Component -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Guter Stil: Jede Component sollte einen Namen haben.
  name: "CalendarWeek",
};
</script>

<!-- Normalerweise ist es bei Vue so, dass Styles IMMER global zur Verfügung stehen - auch dann, wenn sie innerhalb einer Component definiert sind. -->
<!-- Das Schlüsselwort 'scoped' bewirkt, dass Styles, die nur in dieser Klasse definiert sind, NICHT global sondern nur innerhalb dieser Component zur Verfügung stehen. -->
<style scoped></style>
