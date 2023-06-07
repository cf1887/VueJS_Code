import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import CreateProductPage from "@/pages/CreateProductPage.vue";
import ReadProductPage from "@/pages/ReadProductPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import Store from "@/store/index.js";

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
            path: "/",
            alias: "/home",
            component: HomePage,
            beforeEnter: (to, from, next) => {
                if (Store.getters.isAuthenticated) {
                    next("/shop");
                } else {
                    next();
                }
            },
        },
        {
            path: "/shop",
            component: ShopPage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/shop/create/product",
            component: CreateProductPage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/shop/read/product/:id",
            name: "ReadProduct",
            component: ReadProductPage,
            props: true,
            meta: {
                requiresAuth: true,
            },
        },
        /**
         * Das hier ist das Routing für die NotFoundPage.
         * Sie sollte IMMER als letzter Routing-Eintrag registriert werden,
         * denn der Regex '/:pathMatch(.*)*' gibt immer true zurück.
         * Das bedeutet, wenn bis hier hin noch kein Treffer einer Url
         * in den vorherigen Routing-Objekten vorliegt, dann wird dieses
         * Routing-Objekt angestoßen und liefert DEFAULT die NotFoundPage aus.
         * (Im Prinzip: Wenn nicht vorher schon gefunden, liefere default NotFoundPage).
         */
        {
            // In dem Path-Attribut können Regex verwendet werden!
            path: "/:pathMatch(.*)*",
            component: NotFoundPage,
            // Alternative Variante zur NotFoundPage: Redirect zur Startseite
            // redirect: '/'
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !Store.getters.isAuthenticated) {
        next("/");
    } else {
        next();
    }
});

export default router;
