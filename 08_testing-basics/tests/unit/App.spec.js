/**
 * Hinweis zur Ausführung: 
 * Mit dem in der package.json hinterlegten command "npm run test:watch",
 * werden beim Speichern innerhalb dieser Testdatei
 * alle Tests automatisch einmal ausgeführt (siehe '--watch'-Flag).
*/

import App from '@/App.vue';
import { expect } from 'chai';

// Testgruppe
describe('App.vue-Component', () => {
    // Ein Test in der Gruppe
    // it('Dieser Test sollte erfolgreich ausgeführt werden.', () => {
    //     expect("Hello " + "World!").to.equal("Hello World!");
    // });

    // Erster richtiger Test:
    it ('Setzt die initialen Daten korrekt.', () => {
        // Hole die initial gesetzten Daten der App-Component
        const initialData = App.data();
        // Erwartungen mit Chai formulieren:
        expect(initialData.item).to.equal('');
        expect(initialData.items).to.deep.equal([]);
    });
});