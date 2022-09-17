// import Views
import HomeView from "../views/HomeView";
// import CategoryView from "../components/views/CategoryView";
// import TopicView from "../components/views/TopicView";

const routes = [
    { path: "/", name: "Home", component: HomeView },
    {
        path: "*",
        name: "404",
        component: () => import("../views/errors/NotFound"),
    },
];

export default routes;
