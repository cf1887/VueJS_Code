/**
 * Hinweis zur Ausführung: 
 * Mit dem in der package.json hinterlegten command "npm run test:watch",
 * werden beim Speichern innerhalb dieser Testdatei
 * alle Tests automatisch einmal ausgeführt (siehe '--watch'-Flag).
*/

import { expect } from 'chai';

// Testgruppe
describe('App.vue', () => {
    // Ein Test in der Gruppe
    it('Dieser Test sollte erfolgreich ausgeführt werden.', () => {
        expect("Hello " + "World!").to.equal("Hello World!");
    });
});