<template>
  <div
    v-if="notification"
    class="alert"
    :class="{ 'alert-light': isDark, 'alert-dark': !isDark }"
  >
    {{ notification }}
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ["notification", "isDark"],
};
</script>
