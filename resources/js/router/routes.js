const routes = [
    { path: "/", name: "Home", component: () => import("../Views/HomeView") },
    {
        path: "/about",
        name: "About",
        component: () => import("../Views/about/index"),
    },
];
export default routes;
