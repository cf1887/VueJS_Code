<template>
    <div class="hello">
        <h1>
            {{ getGreeting }}
            <button @click="updateGreeting()">
                Aktualisiere die Begrüßung
            </button>
        </h1>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "HelloWorld",
    /**
     * Das Setup()-Attribut ist das Attribut, mit welchem man die Composition-API verwendet.
     * Wird ausgeführt, BEVOR die Component erzeugt wird und NACHDEM die Props verfügbar sind.
     */
    setup() {
        // Hier würde man die ganze Logik hineinschreiben.

        const getGreeting = ref("Moin!");
        console.log(getGreeting);

        const updateGreeting = () => {
            return (getGreeting.value = "Herzlich Willkommen!");
        };

        // Am Ende der Logik wird ein Objekt mit Schlüssel-Werte-Paaren zurückgegeben.
        return {
            getGreeting,
            updateGreeting
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
