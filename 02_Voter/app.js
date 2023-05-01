const app = Vue.createApp({
    // Optionen (auch globale Variablen)
    data: function() {
        return {
            submissions: submissions, // aus seed.js 
            totalVotes: 0,
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
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;
            });
        }
    },
    // Methoden
    methods: {
        upvote() {
            this.submissions[0].votes++;
        },
        logConsole(text) {
            console.log(text);
        },
    },
    // Watcher / (Daten-) Beobachter
    watch: {
        // Beobachte Variable 'submissions' auf Veränderungen
        submissions: {
            handler(newvalue, oldValue) {
                // Überschreibe 'globale' Variable
                this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
                    return totalVotes + submission.votes;
                }, 0);
            },
            // Beobachte auch Daten INNERHALB des Objekts (oder Arrays)
            deep: true,
            // Führe Watcher sofort (also bereits bei der Erstellung des Objekts) aus
            immediate: true,
        },
        // Beobachte Variable 'totalVotes' auf Veränderungen
        totalVotes(newvalue, oldValue) {
            console.log(newvalue);
            console.log(oldValue);
        }
    }
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');