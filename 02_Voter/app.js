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
        cardTitleFontSize() {
            return { fontSize: this.totalVotes + 'px' };
        }
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

// Globale Komponenten
app.component('SubmissionListItem', {
    // Optionen
    props: ['submission'],
    template: `
        <div class="d-flex">
            <div class="d-shrink-0">
                <img v-bind:src="submission.img" alt="" />
            </div>
            <div class="flex-grow-1 ms-3">
                <h5>
                {{ submission.title }}
                <span class="float-end text-primary"
                style="cursor: pointer"
                v-on:click="upvote(submission.id)"
                    ><i class="fa fa-chevron-up"></i>
                    <strong>{{ submission.votes }}</strong></span
                >
                </h5>
                <div v-html="submission.desc"></div>
                <small class="text-muted">Eingereicht von: {{ submission.author }}</small>
            </div>
        </div>
    `,
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');