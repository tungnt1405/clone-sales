/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/vue-slick";

const app = new Vue({
    el: "#app",
    router,
    vuetify,
    render: (h) => h(App),
});
