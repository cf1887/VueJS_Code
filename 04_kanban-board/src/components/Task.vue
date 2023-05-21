<template>
    <div class="alert alert" :class="alertClass">{{ task.content }}</div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Task",
    props: {
        task: Object,
        alertColor: {
            type: String,
            default: "secondary"
        }
    },
    computed: {
        alertClass() {
            // === "alert-" + this.alertColor
            return `alert-${this.alertColor}`;
        }
    }
};
</script>

<style></style>
