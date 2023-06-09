/**
 * Hinweis zur Ausführung:
 * Mit dem in der package.json hinterlegten command "npm run test:watch",
 * werden beim Speichern innerhalb dieser Testdatei
 * alle Tests automatisch einmal ausgeführt (siehe '--watch'-Flag).
 * @link: https://vuejs.org/guide/scaling-up/testing.html
 * @link: https://v1.test-utils.vuejs.org/
 * @link: https://github.com/vuejs/test-utils
 */

import App from "@/App.vue";
import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";

/**
 * Haupt-Testgruppe
 */
describe("App.vue-Component", () => {
    /**
     * Hilfsfunktion zum Mounten der App-Component vom vue/test-utils Plugin.
     * Wichtig ist hier, dass man die shallowMount()-Funktion nutzt,
     * da sonst auch alle Kind-Components geladen werden würden und
     * wenn es bei den Kind-Components zu Fehlern kommt, würden
     * diese Fehler hier auch auftreten - das wäre zumindest nicht zielführend.
     */
    let wrapper;

    /**
     * Vor jedem Test-Case:
     * Mounte die App neu (vermeidet ungewollte Seiteneffekte).
     */
    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    /**
     * Test für initiale Werte
     */
    it("Setzt die initialen Daten korrekt.", () => {
        // Hole die initial gesetzten Daten der App-Component
        // const initialData = App.data();
        // Erwartungen mit Chai formulieren:
        // Hinweis: wrapper.vm holt die Vue-Instanz (damit können wir auf Daten prüfen).
        expect(wrapper.vm.item).to.equal("");
        expect(wrapper.vm.items).to.deep.equal([]);
    });

    /**
     * Suche nach Inhalten im GERENDERTEN DOM (also nicht mehr im Template, sondern bereits im erstellten Html-Code).
     */
    it("Rendert das korrekte Template.", () => {
        expect(wrapper.html()).to.contain('<th class="fs-2">Einträge</th>');
        expect(wrapper.html()).to.contain(
            '<input type="text" class="form-control" placeholder="Eintrag hinzufügen...">'
        );
    });

    /**
     * Prüfe, ob der Hinzufügen-Button initial disabled ist.
     */
    it("Setzt den Button 'Hinzufügen' initial auf disabled.", () => {
        // Am besten mit einer Id danach suchen.
        // Hier reicht aber die Klasse, da wir eh nur einen (primary) button haben
        const addItemButton = wrapper.find(".btn.btn-primary");
        expect(addItemButton.element.disabled).to.be.true;
    });

    /**
     * Weitere Untergruppe für Tests nach Benutzereingaben.
     */
    describe("Die Benutzer:innen schreiben etwas in das Textfeld.", () => {
        // Das Eingabefeld
        let inputField;
        /**
         * Vor jedem Test innerhalb dieser Untergruppe:
         * Suche das Eingabefeld im DOM und schreibe 'Testeintrag' dort hinein.
         */
        beforeEach(async () => {
            inputField = wrapper.find("input");
            inputField.element.value = "Testeintrag";
            await inputField.trigger("input");
        });

        /**
         * Das 'item'-Datenattribut in der App.vue-Component wird passend aktualisiert.
         */
        it("Das 'item'-Datenattribut wird aktualisiert.", () => {
            expect(wrapper.vm.item).to.equal("Testeintrag");
        });

        /**
         * Jetzt sollte der Hinzufügen-Button verfügbar sein.
         */
        it("Der Button 'Hinzufügen' steht bei Inhalten zur Verfügung.", () => {
            const addItemButton = wrapper.find(".btn.btn-primary");
            expect(addItemButton.element.disabled).to.be.false;
        });

        /**
         * Weitere Untergruppe zum Löschen der Eingabe.
         */
        describe("Die Benutzer:innen löschen die Eingabe wieder.", () => {
            /**
             * Vor jedem Test der Untergruppe:
             * Setze den Inhalt der Benutzereingabe zurück.
             */
            beforeEach(async () => {
                inputField.element.value = "";
                await inputField.trigger("input");
            });

            /**
             * Prüfe, ob der Hinzufügen-Button jetzt disabled ist.
             */
            it("Der Button 'Hinzufügen' steht nicht mehr zur Verfügung.", () => {
                const addItemButton = wrapper.find(".btn.btn-primary");
                expect(addItemButton.element.disabled).to.be.true;
            });

            /**
             * Das 'item'-Datenattribut in der App.vue-Component wird zurückgesetzt.
             */
            it("Das 'item'-Datenattribut wird zurückgesetzt.", () => {
                expect(wrapper.vm.item).to.equal("");
            });
        });
    });
});
