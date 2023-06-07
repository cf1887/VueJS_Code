import Store from "@/store/index.js";

const appRoutes = [
    {
        path: "/",
        alias: "/home",
        // Vorher (einfache Variante):
        // component: HomePage
        // Lazy-Loading realisieren:
        component: () => import(/* webpackChunkName: 'group-shop' */"@/pages/HomePage.vue"),
        beforeEnter: (to, from, next) => {
            if (Store.getters.isAuthenticated) {
                next("/shop");
            } else {
                next();
            }
        },
    },
];

export default appRoutes;