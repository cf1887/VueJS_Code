const app = Vue.createApp({
    // Optionen (auch globale Variablen)
    data: function() {
        return {
            submissions: submissions // aus seed.js 
        };
    },
    /**
     * Berechnete Werte (bei Änderungen) - Wie Daten verwendet, aber wie Funktionen definiert.
     * Computed-Values sind besser für die Berechnung von Daten aus Daten als Methoden, denn
     * sie werden nur bei tatsächlichen Änderungen ausgeführt.
     * Beispiel: Eine Methode 'totalVotes()' ermittelt die Gesamtmenge aller Votes aller Einträge.
     * Ändert man nun irgendwann den Titel eines Eintrags, muss der Wert der Votes theoretisch nicht neu berechnet werden.
     * Ist 'totalVotes()' eine Methode (methods), wird sie bei JEDER Änderung ausgeführt.
     * Ist 'totalVotes()' aber ein computed-Value (computed), wird sie nur bei tatsächlichen Änderungen ausgeführt.
     */ 
    computed: {
        /**
         * Berechne die Gesamtmenge aller Votes aller Einträge.
         */
        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0);
        },
    },
    // Methoden
    methods: {
        upvote() {
            this.submissions[0].votes++;
        },
        logConsole(text) {
            console.log(text);
        },
    }
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');