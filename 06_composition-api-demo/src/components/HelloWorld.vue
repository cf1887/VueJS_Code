<template>
    <div class="hello">
        <h1>
            {{ getGreeting }}
            <button @click="updateGreeting()">
                Aktualisiere die Begrüßung
            </button>
        </h1>
        <hr />
        <h1>
            {{ greetingObject.message }} - {{ greetingObject.description }}
            <button @click="updateGreetingObject()">Aktualisiere die Begrüßung</button>
        </h1>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "HelloWorld",
    /**
     * Das Setup()-Attribut ist das Attribut, mit welchem man die Composition-API verwendet.
     * Wird ausgeführt, BEVOR die Component erzeugt wird und NACHDEM die Props verfügbar sind.
     */
    setup() {
        // Hier würde man die ganze Logik hineinschreiben.

        /**
         * Verwendung der ref()-Funktion zum Hinzufügen von primitiven Datentypen in das Reaktivsystem.
         */
        const getGreeting = ref("Moin!");
        console.log(getGreeting);
        const updateGreeting = () => {
            return (getGreeting.value = "Herzlich Willkommen!");
        };

        /**
         * Verwendung der reactive()-Funktion zum Hinzufügen von nicht-primitiven Datentypen in das Reaktivsystem.
         */
        const greetingObject = reactive({
            message: "Salut",
            description: "Willkommen zur App!",
        });
        const updateGreetingObject = () => {
            greetingObject.message = "Servus";
            greetingObject.description = "Beschreibung aktualisiert!";
        };

        // Am Ende der Logik wird ein Objekt mit Schlüssel-Werte-Paaren zurückgegeben.
        return {
            getGreeting,
            updateGreeting,
            greetingObject,
            updateGreetingObject,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
