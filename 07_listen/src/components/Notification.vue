<template>
    <div
        v-if="notification.active"
        class="alert alert-dismissible"
        :class="{ 'alert-light': darkMode, 'alert-dark': !darkMode }"
    >
        {{ notification.message }}
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            @click="toggleNotification"
        ></button>
    </div>
</template>

<script>
import useDarkMode from "@/hooks/useDarkMode";
export default {
    name: "Notification",
    props: ["notification", "toggleNotification"],
    setup() {
        const { darkMode } = useDarkMode();
        return {
            darkMode,
        }
    },
};
</script>
