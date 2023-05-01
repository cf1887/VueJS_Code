const app = Vue.createApp({
    // Optionen (auch globale Variablen)
    data: function() {
        return {
            submissions: submissions // aus seed.js 
        };
    },
    methods: {
        upvote(info, event) {
            this.submissions[0].votes++;
            console.log(info);
            console.log(event);
        },
    }
});

// Liefer die Instanz zur Root-Component zurück, das sogenannte View-Model (vm)
const vm = app.mount('#app');