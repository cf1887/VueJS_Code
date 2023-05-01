# VueJS-Kurs von Udemy

Link: https://www.udemy.com/course/vuejs-3-der-komplettkurs

___

## Inhaltsverzeichnis

[TOC]

___

## Wichtige Attribute

## Computed Properties vs. Methods vs. Watcher

Wann benutzt man was?

Dazu git es Common-Practices:

| Vergleich | Computed Properties | Methods | Watcher |
|-----------|---------------------|---------|---------|
| Code wird ausgeführt, wenn sich... | abhängige Daten ändern. | "sichtbare" Daten ändern, d.h. das Template neu geladen werden muss. | die beobachteten Daten ändern. |
| Einsatz | Daten, welche von anderen Daten abhängen (z.B. totalVotes). | Event-Listener oder für Daten, die sich permanent ändern. | Sollte Code ausführen, welcher sich nicht direkt auf das Template auswirkt, z.B. HTTP-Anfragen, Nutzung von localStorage, etc. |

