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
        <Day_Deal></Day_Deal>
        <div class="emb-detailOffer-wrap">
            <div class="off-list">
                <v-row class="layout wrap">
                    <v-col
                        sm="12"
                        md="12"
                        xs="12"
                        lg="4"
                        xl="4"
                        class="detailOffer"
                    >
                        <router-link to="#">
                            <div class="overlay-wrap position-relative">
                                <a href="#">
                                    <v-img
                                        src="images/data/3-item-a.jpg"
                                        class="w-100"
                                        max-width="98%"
                                        max-height="345"
                                    ></v-img>
                                </a>
                            </div>
                        </router-link>
                        <div class="overlay-content primary-rgba">
                            <div>
                                <h2>Sale</h2>
                                <h5>Women collection</h5>
                                <h3>50% Off</h3>
                            </div>
                        </div>
                    </v-col>
                    <v-col
                        sm="12"
                        md="12"
                        xs="12"
                        lg="4"
                        xl="4"
                        class="detailOffer"
                    >
                        <router-link to="#">
                            <div class="overlay-wrap position-relative">
                                <a href="#">
                                    <v-img
                                        src="images/data/4-item-a.jpg"
                                        class="w-100"
                                        max-width="98%"
                                        max-height="345"
                                    ></v-img>
                                </a>
                            </div>
                        </router-link>
                        <div class="overlay-content primary-rgba">
                            <div>
                                <h2>Sale</h2>
                                <h5>Women collection</h5>
                                <h3>50% Off</h3>
                            </div>
                        </div>
                    </v-col>
                    <v-col
                        sm="12"
                        md="12"
                        xs="12"
                        lg="4"
                        xl="4"
                        class="detailOffer"
                    >
                        <router-link to="#">
                            <div class="overlay-wrap position-relative">
                                <a href="#">
                                    <v-img
                                        src="images/data/2-item-a.jpg"
                                        class="w-100"
                                        max-width="98%"
                                        max-height="345"
                                    ></v-img>
                                </a>
                            </div>
                        </router-link>
                        <div class="overlay-content primary-rgba">
                            <div>
                                <h2>Sale</h2>
                                <h5>Women collection</h5>
                                <h3>50% Off</h3>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import Day_Deal from "./Day_Deal.vue";
import Featured_Products from "./Featured_Products.vue";
export default {
    components: { Featured_Products, Day_Deal },
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

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0.5rem;
    margin-top: 0;
}
h2,
h2 a {
    font-size: 2.813rem !important;
}
h5 {
    line-height: 1.4;
}
h5,
h5 a {
    font-size: 1.25rem;
}
.container.grid-list-xl .layout:only-child,
.container.grid-list-xl :not(:only-child) .layout:first-child {
    margin: -15px;
}
.detailOffer {
    padding: 0 0 12px 0;
}
.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.overlay-wrap,
.overlay-content * {
    color: #fff;
}
.primary-rgba h2,
.primary-rgba h5,
.primary-rgba h3 {
    line-height: 1;
}
.primary-rgba h2 {
    font-weight: 900;
    font-size: 6rem !important;
    font-style: italic;
}
.primary-rgba h3 {
    font-weight: bold;
}
.primary-rgba h5 {
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
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
    .detailOffer {
        padding: 0 !important;
    }
}
@media only screen and (max-width: 37.5em) {
    .banner .container.grid-list-xl .layout .d-flex {
        padding: 15px 0 !important;
    }
    .emb-feature__wrap .container .row {
        flex-direction: column;
    }
}
</style>
