<template>
    <div>
        <input type="text" class="form-control" placeholder="Neue Aufgabe" v-model="content" />
        <div class="d-grid my-2">
            <button class="btn btn-secondary" @click="submitTask()">Eintragen</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewTask",
    // Registrieren, welche Events es in dieser Component gibt
    emits: {
        "new-task": (task) => {
            // Validiere Payload, vor Übergabe an den Listener
            if (task.content === "") {
                console.warn("NewTaskComponent: Der Content sollte nicht leer sein!");
                return false;
            }
            console.log('content', task.content);
            return true;
        }
    },
    data() {
        return {
            content: "",
        }
    },
    methods: {
        submitTask() {
            // Event ausrufen
            this.$emit("new-task", {
                // Payload (wird Listener mit übergeben)
                content: this.content,
            });
            this.content = "";
        }
    }
};
</script>

<style scoped></style>
