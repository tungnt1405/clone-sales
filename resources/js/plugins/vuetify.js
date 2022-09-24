import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                white: "#fff",
                primary: "#283593",
                accent: "#ff5722",
            },
            dark: {},
        },
    },
    icons: {
        iconfont: "mdi", // default - only for display purposes
    },
    breakpoint: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280,
        },
        scrollBarWidth: 24,
    },
};

export default new Vuetify(opts);
