<template>
    <div class="hello">
        <h1>
            {{ getGreeting }} - {{ greetingReverse }}
            <button @click="updateGreeting()">
                Aktualisiere die Begrüßung
            </button>
        </h1>
        <hr />
        <h1>
            {{ greetingObject.message }} - {{ greetingObject.description }}
            <button @click="updateGreetingObject()">
                Aktualisiere die Begrüßung
            </button>
        </h1>
        <hr />
        <h2>{{ message }} - {{ description }}</h2>
    </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
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
        const greetingReverse = computed(() => {
            return getGreeting.value.split("").reverse().join("");
        });

        /**
         * Verwendung der reactive()-Funktion zum Hinzufügen von nicht-primitiven Datentypen in das Reaktivsystem.
         */
        const greetingObject = reactive({
            message: "Salut",
            description: "Willkommen zur App!",
        });
        /**
         * Wandle jedes Schlüssel-Werte-Paar des Objekts in ein Ref um.
         * Ein Ref ist ein REAKTIVES Objekt, d.h. wenn man normalerweise Schlüssel-Werte-Paare aus einem
         * nicht-toRef-Objekt in eine Variable speichert, sind diese nicht reaktiv (sie aktualisieren sich bei Veränderung nicht mit).
         * Die Funktion toRefs() ermöglicht ein solches reaktives Verhalten.
         */
        const greetingObjectRefs = toRefs(greetingObject);
        const { message, description } = greetingObjectRefs;
        const updateGreetingObject = () => {
            greetingObject.message = "Servus";
            greetingObject.description = "Beschreibung aktualisiert!";
        };

        // Am Ende der Logik wird ein Objekt mit Schlüssel-Werte-Paaren zurückgegeben.
        return {
            getGreeting,
            updateGreeting,
            greetingReverse,
            greetingObject,
            updateGreetingObject,
            message,
            description,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
