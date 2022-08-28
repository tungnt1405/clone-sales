require("./bootstrap");

window.Vue = require("vue").default;
import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );
const app = new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
