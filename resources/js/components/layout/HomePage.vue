<template>
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
</template>

<script>
export default {
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
        };
    },
};
</script>

<style scoped>
.banner {
    padding-top: 6rem;
    padding-bottom: 6rem;
}

.container.grid-list-xl .layout:only-child,
.container.grid-list-xl :not(:only-child) .layout:first-child {
    margin: -15px;
}
.banner__slide {
    margin-left: 1px;
    margin-top: 1px;
    margin-right: 1px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 10%),
        0 1px 5px 0 rgb(0 0 0 / 10%);
    overflow: hidden;
}
.emb-aside-banner {
    max-width: 100%;
}
.emb-aside-banner .emb-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);
    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
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
