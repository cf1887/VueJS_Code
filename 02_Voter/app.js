const app = Vue.createApp({
    // Optionen (auch globale Variablen)
    data: function() {
        return {
            submissions: submissions, // aus seed.js
        };
    },
    // ComputedProperties
    computed: {
        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0);
        },
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;
            });
        },
        cardHeaderBackgroundColor() {
            return {
                'bg-primary': this.totalVotes >= 50,
                'text-white': this.totalVotes >= 50,
            }
        },
    },
    // Methoden
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find((submission) => submission.id === submissionId);
            submission.votes++;
        },
    },
    // Watcher / (Daten-) Beobachter
    watch: {
    }
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');