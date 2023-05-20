# VueJS-Kurs von Udemy

Link: https://www.udemy.com/course/vuejs-3-der-komplettkurs

___

## Inhaltsverzeichnis

- [Inhaltsverzeichnis](#inhaltsverzeichnis)
- [Wichtige Attribute](#wichtige-attribute)
- [Computed Properties vs. Methods vs. Watcher](#computed-properties-vs-methods-vs-watcher)
- [Zusammenfassung der grundlegenden Vue-Funktionalitäten](#zusammenfassung-der-grundlegenden-vue-funktionalitäten)
- [Zusammenfassung zu Transitions](#zusammenfassung-zu-transitions)

___

## Wichtige Attribute

## Computed Properties vs. Methods vs. Watcher

Wann benutzt man was?

Dazu git es Common-Practices:

| Vergleich | Computed Properties | Methods | Watcher |
|-----------|---------------------|---------|---------|
| Code wird ausgeführt, wenn sich... | abhängige Daten ändern. | "sichtbare" Daten ändern, d.h. das Template neu geladen werden muss. | die beobachteten Daten ändern. |
| Einsatz | Daten, welche von anderen Daten abhängen (z.B. totalVotes). | Event-Listener oder für Daten, die sich permanent ändern. | Sollte Code ausführen, welcher sich nicht direkt auf das Template auswirkt, z.B. HTTP-Anfragen, Nutzung von localStorage, etc. |

___

## Zusammenfassung der grundlegenden Vue-Funktionalitäten

| Abschluss | Stichwort in Vue-Doc |
|-----------|----------------------|
| Components lokal einbinden | Component Registration |
| Daten an eine Component "runter" geben | Props |
| Das Template einer Component von "außen" selbst bestimmen | Slots |
| Event-Listener einschränken | Modifiers |
| In den Erstellungsprozess einer Component eingreifen | Lifecycle-Hooks |
| Template-Elemente an eine Bedingung knüpfen | v-if / v-show |
| Components erst dann laden, wenn sie auch wirklich benötigt werden | Async Components |
| Components im Template dynamisch wechseln | Dynamic Components |

___

## Zusammenfassung zu Transitions

| Abschluss | Stichwort in Vue-Doc |
|-----------|----------------------|
| Einzelne Components mit einem Übergang ein- & ausblenden. | Enter & Leave Transitions |
| Zwischen Components Übergänge realisieren. | Transitiong between components |
| Zwischen Blöcke Übergänge realisieren. | Transitioning between elements |
| Elemente innerhalb einer Gruppe von Elementen animieren. | Transition-groups & list-transitions |
| Verwendung von externen Paketen zur Animation (animate.css) | Custom transition classes |
