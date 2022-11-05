<template>
    <div class="feature-product__wrap section__gap title__gap">
        <v-container>
            <div class="section__gap-title">
                <h2 class="text-center font-weight-bold">Featured Products</h2>
            </div>
            <div class="tab-bar__wrap text-center flex-column">
                <div class="py-3">
                    <v-tabs centered v-model="tabs">
                        <v-tab>Men</v-tab>
                        <v-tab>Women</v-tab>
                        <v-tab>gadgets</v-tab>
                        <v-tab>accessories</v-tab>
                    </v-tabs>
                </div>
            </div>
            <div class="tab-content">
                <v-tabs-items v-model="tabs">
                    <v-tab-item v-for="n in 4" :key="n">
                        <SlickCarousel v-bind="slick" class="slick__product">
                            <div>
                                <v-card
                                    class="my-3 mx-5 card__product"
                                    max-height="100%"
                                >
                                    <v-img
                                        src="images/data/1-item-a.jpg"
                                        lazy-src="images/data/4-item-a.jpg"
                                        max-height="800"
                                        class="grey--text"
                                    >
                                        <v-card-title
                                            class="d-flex justify-content-end"
                                        >
                                            <v-btn icon
                                                ><v-icon
                                                    >mdi-heart</v-icon
                                                ></v-btn
                                            >
                                        </v-card-title>
                                    </v-img>
                                    <div class="add__to-cart">
                                        <v-btn
                                            color="accent"
                                            fab
                                            depressed
                                            small
                                            ><v-icon>mdi-cart</v-icon></v-btn
                                        >
                                    </div>
                                    <v-card-subtitle class="pb-0">
                                        <h5 class="h5__title">Blue Jean</h5>
                                    </v-card-subtitle>

                                    <v-card-text
                                        class="d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
                                    >
                                        <div
                                            class="accent--text feature__product-price"
                                        >
                                            $18.75
                                        </div>

                                        <div class="orange--text">
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div>
                                <v-card
                                    class="my-3 mx-5 card__product"
                                    max-height="100%"
                                >
                                    <v-img
                                        src="images/data/1-item-a.jpg"
                                        lazy-src="images/data/4-item-a.jpg"
                                        max-height="800"
                                        class="grey--text"
                                    >
                                        <v-card-title
                                            class="d-flex justify-content-end"
                                        >
                                            <v-btn icon
                                                ><v-icon
                                                    >mdi-heart</v-icon
                                                ></v-btn
                                            >
                                        </v-card-title>
                                    </v-img>
                                    <div class="add__to-cart">
                                        <v-btn
                                            color="accent"
                                            fab
                                            depressed
                                            small
                                            ><v-icon>mdi-cart</v-icon></v-btn
                                        >
                                    </div>
                                    <v-card-subtitle class="pb-0">
                                        <h5 class="h5__title">Blue Jean</h5>
                                    </v-card-subtitle>

                                    <v-card-text
                                        class="d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
                                    >
                                        <div
                                            class="accent--text feature__product-price"
                                        >
                                            $18.75
                                        </div>

                                        <div class="orange--text">
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div>
                                <v-card
                                    class="my-3 mx-5 card__product"
                                    max-height="100%"
                                >
                                    <v-img
                                        src="images/data/1-item-a.jpg"
                                        lazy-src="images/data/4-item-a.jpg"
                                        max-height="800"
                                        class="grey--text"
                                    >
                                        <v-card-title
                                            class="d-flex justify-content-end"
                                        >
                                            <v-btn icon
                                                ><v-icon
                                                    >mdi-heart</v-icon
                                                ></v-btn
                                            >
                                        </v-card-title>
                                    </v-img>
                                    <div class="add__to-cart">
                                        <v-btn
                                            color="accent"
                                            fab
                                            depressed
                                            small
                                            ><v-icon>mdi-cart</v-icon></v-btn
                                        >
                                    </div>
                                    <v-card-subtitle class="pb-0">
                                        <h5 class="h5__title">Blue Jean</h5>
                                    </v-card-subtitle>

                                    <v-card-text
                                        class="d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
                                    >
                                        <div
                                            class="accent--text feature__product-price"
                                        >
                                            $18.75
                                        </div>

                                        <div class="orange--text">
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div>
                                <v-card
                                    class="my-3 mx-5 card__product"
                                    max-height="100%"
                                >
                                    <v-img
                                        src="images/data/1-item-a.jpg"
                                        lazy-src="images/data/4-item-a.jpg"
                                        max-height="800"
                                        class="grey--text"
                                    >
                                        <v-card-title
                                            class="d-flex justify-content-end"
                                        >
                                            <v-btn icon
                                                ><v-icon
                                                    >mdi-heart</v-icon
                                                ></v-btn
                                            >
                                        </v-card-title>
                                    </v-img>
                                    <div class="add__to-cart">
                                        <v-btn
                                            color="accent"
                                            fab
                                            depressed
                                            small
                                            ><v-icon>mdi-cart</v-icon></v-btn
                                        >
                                    </div>
                                    <v-card-subtitle class="pb-0">
                                        <h5 class="h5__title">Blue Jean</h5>
                                    </v-card-subtitle>

                                    <v-card-text
                                        class="d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
                                    >
                                        <div
                                            class="accent--text feature__product-price"
                                        >
                                            $18.75
                                        </div>

                                        <div class="orange--text">
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div>
                                <v-card
                                    class="my-3 mx-5 card__product"
                                    max-height="100%"
                                >
                                    <v-img
                                        src="images/data/1-item-a.jpg"
                                        lazy-src="images/data/4-item-a.jpg"
                                        max-height="800"
                                        class="grey--text"
                                    >
                                        <v-card-title
                                            class="d-flex justify-content-end"
                                        >
                                            <v-btn icon
                                                ><v-icon
                                                    >mdi-heart</v-icon
                                                ></v-btn
                                            >
                                        </v-card-title>
                                    </v-img>
                                    <div class="add__to-cart">
                                        <v-btn
                                            color="accent"
                                            fab
                                            depressed
                                            small
                                            ><v-icon>mdi-cart</v-icon></v-btn
                                        >
                                    </div>
                                    <v-card-subtitle class="pb-0">
                                        <h5 class="h5__title">Blue Jean</h5>
                                    </v-card-subtitle>

                                    <v-card-text
                                        class="d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
                                    >
                                        <div
                                            class="accent--text feature__product-price"
                                        >
                                            $18.75
                                        </div>

                                        <div class="orange--text">
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                            <v-icon color="orange" small
                                                >mdi-star</v-icon
                                            >
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </SlickCarousel>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "featured-products",
    props: ["bar_wrap"],
    data() {
        return {
            tabs: null,
            slick: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 300,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style scoped>
.section__gap .section__gap-title {
    margin-bottom: 3rem;
}
.tab-bar__wrap {
    overflow-x: hidden;
    display: flex;
    padding: 0 20px 35px;
    margin: auto;
    justify-content: center;
}
.feature-product__wrap
    .tab-bar__wrap
    .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: transparent;
}
.feature-product__wrap .tab-bar__wrap .v-btn {
    box-shadow: none;
    border-radius: 5px;
}
.thumb-wrap {
    position: relative;
}
.feature-product__wrap .emb-card .img {
    border-radius: 5px 5px 0 0;
    width: 100%;
}
.h5__title {
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
}
.feature__product-price {
    line-height: 1.4;
    font-weight: 500;
    font-size: 1rem;
}
.slick__product {
    margin-bottom: 40px;
}
.card__product .v-image {
    cursor: pointer;
}
.add__to-cart .v-btn {
    position: absolute;
    right: 10px;
    bottom: 70px;
    line-height: 5.125rem;
    transition: 0.4s ease-in;
    margin: 0;
    height: 3.4rem;
    width: 3.4rem;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
}
.card__product:hover .add__to-cart .v-btn {
    transform: translateY(-20px);
}
::v-deep ul.slick-dots li button:before {
    font-size: 10px !important;
}
@media screen and (min-width: 600px) and (max-width: 959px) {
    .add__to-cart .v-btn {
        bottom: 84px !important;
    }
}
</style>
