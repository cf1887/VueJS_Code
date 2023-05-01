const app = Vue.createApp({
    // Optionen (auch globale Variablen)
    data: function() {
        return {
            submissions: submissions // aus seed.js 
        };
    },
    methods: {
        upvote() {
            this.submissions[0].votes++;
        },
        logConsole(text) {
            console.log(text);
        },
        /**
         * Berechne die Gesamtmenge aller Votes aller Einträge
         */
        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0);
        },
    }
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');