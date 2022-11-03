<template>
    <div>
        <div class="banner">
            <v-container class="grid-list-xl">
                <v-row class="wrap layout">
                    <v-col xs="12" sm="12" md="12" xl="8" lg="8">
                        <div class="home-banner-wrap">
                            <SlickCarousel v-bind="slick">
                                <div>
                                    <div class="d-inline-block w-100">
                                        <div class="banner__slide">
                                            <router-link to="#">
                                                <v-img
                                                    src="images/data/slider-1.jpg"
                                                    lazy-src="images/data/slider-1.jpg"
                                                ></v-img>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-inline-block w-100">
                                        <div class="banner__slide">
                                            <router-link to="#">
                                                <v-img
                                                    src="images/data/slider-3.jpg"
                                                    lazy-src="images/data/slider-3.jpg"
                                                ></v-img>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </SlickCarousel>
                        </div>
                    </v-col>
                    <v-col xs="12" sm="12" md="12" xl="4" lg="4">
                        <v-row class="wrap layout text-center mx-0">
                            <v-col
                                class="d-flex px-0"
                                xs="12"
                                sm="6"
                                md="6"
                                lg="12"
                                xl="12"
                            >
                                <div class="emb-aside-banner">
                                    <router-link to="#">
                                        <v-img
                                            src="images/data/aside-1.jpg"
                                            lazy-src="images/data/aside-1.jpg"
                                            class="emb-card d-inline-block"
                                        ></v-img>
                                    </router-link>
                                </div>
                            </v-col>
                            <v-col
                                class="d-flex px-0"
                                xs="12"
                                sm="6"
                                md="6"
                                lg="12"
                                xl="12"
                            >
                                <div class="emb-aside-banner">
                                    <router-link to="#">
                                        <v-img
                                            src="images/data/aside-2.jpg"
                                            lazy-src="images/data/aside-2.jpg"
                                            class="emb-card d-inline-block"
                                        ></v-img>
                                    </router-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="emb-feature__wrap">
            <v-container>
                <v-row class="layout wrap bg bg-white ma-1 emb-card">
                    <v-col
                        class="d-flex feature-item pa-6"
                        sm="12"
                        md="4"
                        lg="4"
                    >
                        <div
                            class="emb-feature__content d-flex layout align-center pa-md-4"
                        >
                            <div class="thumb-wrap mb-4 mb-md-0">
                                <v-img
                                    src="images/data/free-delivery.png"
                                    lazy-src="images/data/free-delivery.png"
                                    max-height="50px"
                                    max-width="50px"
                                ></v-img>
                            </div>
                            <div class="features">
                                <h6 class="font-weight-medium">
                                    FREE SHIPPINGS
                                </h6>
                                <h5>Every Day, Every Order</h5>
                                <span class="grey--text"
                                    >*All order over $100</span
                                >
                            </div>
                        </div>
                    </v-col>
                    <v-col
                        class="d-flex feature-item pa-6"
                        sm="12"
                        md="4"
                        lg="4"
                    >
                        <div
                            class="emb-feature__content d-flex layout align-center pa-md-4"
                        >
                            <div class="thumb-wrap mb-4 mb-md-0">
                                <v-img
                                    src="images/data/customer-support.png"
                                    lazy-src="images/data/customer-support.png"
                                    max-height="50px"
                                    max-width="50px"
                                ></v-img>
                            </div>
                            <div class="features">
                                <h6 class="font-weight-medium">
                                    FRIENDLY SUPPORT
                                </h6>
                                <h5>24/7 Dedicated Support</h5>
                                <span class="grey--text">*Only In USA</span>
                            </div>
                        </div>
                    </v-col>
                    <v-col
                        class="d-flex feature-item pa-6"
                        sm="12"
                        md="4"
                        lg="4"
                    >
                        <div
                            class="emb-feature__content d-flex layout align-center pa-md-4"
                        >
                            <div class="thumb-wrap mb-4 mb-md-0">
                                <v-img
                                    src="images/data/money-back.png"
                                    lazy-src="images/data/money-back.png"
                                    max-height="50px"
                                    max-width="50px"
                                ></v-img>
                            </div>
                            <div class="features">
                                <h6 class="font-weight-medium">SECURE</h6>
                                <h5>Money Back Guranteed</h5>
                                <span class="grey--text"
                                    >*Conditions Apply</span
                                >
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <Featured_Products :bar_wrap="bar_wrap"></Featured_Products>
    </div>
</template>

<script>
import Featured_Products from "./Featured_Products.vue";
export default {
    components: { Featured_Products },
    name: "HomeComponent",
    data: () => {
        return {
            slick: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            },
            bar_wrap: ["Men", "Women", "gadgets", "accessories"],
        };
    },
};
</script>

<style scoped>
.container.grid-list-xl .layout:only-child,
.container.grid-list-xl :not(:only-child) .layout:first-child {
    margin: -15px;
}
@media only screen and (max-width: 78.9375em) {
    .banner .container.grid-list-xl .layout .d-flex {
        padding: 15px !important;
    }
    .banner .container.grid-list-xl .layout .d-flex:first-child {
        padding-left: 0px !important;
    }
    .banner .container.grid-list-xl .layout .d-flex:last-child {
        padding-right: 0px !important;
    }
    .emb-card:first-child,
    .emb-card:last-child {
        margin-left: 0px !important;
    }
}
@media only screen and (max-width: 37.5em) {
    .banner .container.grid-list-xl .layout .d-flex {
        padding: 15px 0 !important;
    }
}
</style>
