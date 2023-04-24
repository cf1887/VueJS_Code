// setTimeout(() => {
//     console.log('Hallo nach 2 Sekunden.');
// }, 2000);

// console.log("Hallo!");

const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hallo nach 2 Sekunden.');
        resolve('Erledigt');
    }, 2000);
});

const startGreeting = () => {
    console.log(
        // Then-Block wird erst ausgeführt, wenn die 'resolve()-funktion' in greeting aufgerufen wurde
        greeting.then((result) => {
            console.log(result);
            console.log('Moin!');
        })
        // Catch-Block wird ausgeführt, sobald im greeting-Promise etwas schiefgelaufen ist oder reject aufgerufen wurde
        .catch(() => { console.log('Es ist etwas schiefgelaufen...'); })
    );
};

startGreeting();

const startGreetingAsyncAwait = async () => {
    // Try-Catch-Block identisch zur 'then-catch'-Notation
    try {
        const result = await greeting;
        console.log(result);
        console.log('Moin!');
    }
    catch (ex) {
        console.log('Es ist etwas schiefgelaufen...');
    }
}

startGreetingAsyncAwait();