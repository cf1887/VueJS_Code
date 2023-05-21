<template>
    <div class="card">
        <div class="card-header text-center bg-secondary text-white">
            <h4>Neue Aufgaben</h4>
        </div>
        <div class="card-body">
            <Task></Task>
        </div>
        <div class="card-footer">
            <NewTask></NewTask>
        </div>
    </div>
</template>

<script>
import Task from "./Task.vue";
import NewTask from "./NewTask.vue";
export default {
    name: "StatusCard",
    components: {
        Task,
        NewTask,
    },
};
</script>

<style scoped></style>
