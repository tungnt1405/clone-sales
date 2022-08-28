import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Views
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";

const routes = [
    { path: "/", name: "HomeView", component: HomeView },
    {
        path: "/about",
        name: "AboutView",
        component: AboutView,
    },
    { path: "*", component: () => import("../views/errors/NotFound.vue") },
];

const router = new VueRouter({
    mode: "history",
    routes,
});
export default router;
