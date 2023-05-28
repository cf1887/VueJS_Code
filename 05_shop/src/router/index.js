import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ShopPage from '@/pages/ShopPage.vue';

/**
 * Ziel ist das klassische Routing für eine Single-Page-Application zu realisieren.
 * 
 * Beispiel für klassisches Routing: 'www.shop.de/auth/login'.
 * Normalerweise sendet jeder Browser bei Änderungen in der Url IMMER ein Request zum Server,
 * welcher unter der entsprechenden Url erreichbar ist.
 * 
 * Ausnahmen sind beispielsweise folgende Urls: 'www.shop.de/index.html/#/auth/login'.
 * Bei solche Urls ist der entscheidende Unterschied die Verwendung des '#'-Symbols.
 * Alles hinter dem '#'-Symbol wird ohnehin NICHT für die Server-Kommunikation
 * von allen gängigen Browsern genutzt.
 * 
 * Mithilfe dieser Router-Klasse kann nun dem Browser beigebracht werden,
 * dass auch andere, KLASSISCHE Urls kein neues Request senden sollen,
 * sondern mithilfe dieser Single-Page-Anwendung aufgelöst werden.
 */

const router = createRouter({
    // Optionen
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/shop',
            component: ShopPage,
        }
    ]
});

export default router;