<template>
    <div
        v-if="notification.active"
        class="alert alert-dismissible"
        :class="{ 'alert-light': isDark, 'alert-dark': !isDark }"
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
export default {
    name: "Notification",
    props: ["notification", "isDark", "toggleNotification"],
};
</script>
