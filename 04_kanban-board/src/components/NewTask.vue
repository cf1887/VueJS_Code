<template>
    <div>
        <input
            type="text"
            class="form-control"
            placeholder="Neue Aufgabe"
            v-model="content"
            v-focus="{ color: 'green' }"
        />
        <small>Noch {{ numbersOfCharsLeft }} Zeichen erlaubt.</small>
        <div class="d-grid my-2">
            <button class="btn btn-secondary" @click="submitTask()">
                Eintragen
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewTask",
    // Direktes 'Injizieren von Daten, die zuvor von 'provide' in einer beliebigen Component zur Verfügung gestellt werden'
    inject: ["maxNumberOfChars"],
    // Registrieren, welche Events es in dieser Component gibt
    emits: {
        "new-task": (task) => {
            // Validiere Payload, vor Übergabe an den Listener
            if (task.content === "") {
                console.warn(
                    "NewTaskComponent: Der Content sollte nicht leer sein!"
                );
                return false;
            }
            return true;
        },
    },
    data() {
        return {
            content: "",
        };
    },
    computed: {
        numbersOfCharsLeft() {
            return this.maxNumberOfChars - this.content.length;
        },
    },
    methods: {
        submitTask() {
            // Event ausrufen
            this.$emit("new-task", {
                // Payload (wird Listener mit übergeben)
                content: this.content,
            });
            this.content = "";
        },
    },
};
</script>

<style scoped></style>
