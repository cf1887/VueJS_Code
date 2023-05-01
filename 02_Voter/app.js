const app = Vue.createApp({
    // Optionen (auch globale Variablen)
    data: function() {
        return {
            submissions: submissions // aus seed.js 
        };
    },
    methods: {
        upvote(event) {
            this.submissions[0].votes++;
        },
        logConsole(text) {
            console.log(text);
        }
    }
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');