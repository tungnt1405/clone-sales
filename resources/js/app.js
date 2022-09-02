require("./bootstrap");

window.Vue = require("vue").default;
import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import NProgress from "vue-nprogress";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";

const options = {
    latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
    router: true, // Show progressbar when navigating routes, default: true
    http: false, // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options);

const nprogress = new NProgress();

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCu3DnQN8y39_Ydc5hJ0MQ7zYhTvetET44",
        libraries: "places",
    },
});

const app = new Vue({
    el: "#app",
    router,
    nprogress,
    vuetify,
    render: (h) => h(App),
});
