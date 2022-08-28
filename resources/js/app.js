require("./bootstrap");

window.Vue = require("vue").default;
import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import NProgress from "vue-nprogress";
const options = {
    latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
    router: true, // Show progressbar when navigating routes, default: true
    http: false, // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options);

const nprogress = new NProgress();
// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );
const app = new Vue({
    el: "#app",
    router,
    nprogress,
    render: (h) => h(App),
});
