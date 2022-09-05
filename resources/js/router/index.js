import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Views
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";
import PrivacyView from "../views/PrivacyView";

const routes = [
    { path: "/", name: "HomeView", component: HomeView },
    {
        path: "/about",
        name: "AboutView",
        component: AboutView,
    },
    {
        path: "/contact",
        name: "ContactView",
        component: ContactView,
    },
    {
        path: "/privacy",
        name: "PrivacyView",
        component: PrivacyView,
    },
    { path: "*", component: () => import("../views/errors/NotFound.vue") },
];

const router = new VueRouter({
    mode: "history",
    routes,
});
export default router;
