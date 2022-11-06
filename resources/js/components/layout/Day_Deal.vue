<template>
    <div class="day-deal-wrap white section__gap">
        <v-container class="grid-list-xl pb-0">
            <v-row class="layout wrap">
                <v-col xs="12" sm="12" md="6" lg="6" xl="6" class="galivery">
                    <SlickCarousel
                        ref="c1"
                        v-bind="slider_for"
                        class="slider-for"
                        @beforeChange="syncSliders"
                    >
                        <router-link to="#">
                            <v-img
                                src="images/data/1-item-a.jpg"
                                max-width="900px"
                                max-height="800px"
                            ></v-img>
                        </router-link>
                        <router-link to="#">
                            <v-img
                                src="images/data/2-item-a.jpg"
                                max-width="900px"
                                max-height="800px"
                            ></v-img>
                        </router-link>
                        <router-link to="#">
                            <v-img
                                src="images/data/3-item-a.jpg"
                                max-width="900px"
                                max-height="800px"
                            ></v-img>
                        </router-link>
                        <router-link to="#">
                            <v-img
                                src="images/data/4-item-a.jpg"
                                max-width="900px"
                                max-height="800px"
                            ></v-img>
                        </router-link>
                    </SlickCarousel>
                </v-col>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <div class="day-deal__content">
                        <div class="mb-12">
                            <h2 class="font-weight-regular mb-6">
                                Deal of the day
                            </h2>
                            <h5 class="font-weight-regular">Denim Pullover</h5>
                            <p class="d-inline-block mr-1">
                                <strike class="px-1"
                                    ><span class="font-color">$</span
                                    >42.46</strike
                                >
                            </p>
                            <p class="accent--text d-inline-block sec-content">
                                Now only
                                <span class="accent--text">$</span>36.00
                            </p>
                            <p>
                                Suspendisse porttitor ornare ligula. Nam massa
                                erat,fermentum dolor quis, maximus ultrices
                                diam. Aenean pellentesque auctor elementum. Nunc
                                vitae tortor iaculis, mollis odio at, lacinia
                                sapien. Mauris et leo sem. Curabitur sit amet
                                enim nisi. Nunc placerat commodo sem, sed
                                maximus purus
                            </p>
                            <div class="timer mb-6">
                                <div class="timer-wrap mb-4">
                                    <div>
                                        <div
                                            class="counter-item"
                                            v-if="countDown.countDays > 0"
                                        >
                                            <span
                                                class="counter-digit d-inline font-weight-regular"
                                                >{{ countDown.countDays }}</span
                                            ><span
                                                class="counter-text d-inline font-weight-regular mx-2"
                                                >Days</span
                                            >
                                        </div>
                                        <div class="counter-item">
                                            <span
                                                class="counter-digit d-inline font-weight-regular"
                                                >{{
                                                    countDown.countHours
                                                }}</span
                                            ><span
                                                class="counter-text d-inline font-weight-regular mx-2"
                                                >Hours</span
                                            >
                                        </div>
                                        <div class="counter-item">
                                            <span
                                                class="counter-digit d-inline font-weight-regular"
                                                >{{
                                                    countDown.countMinutes
                                                }}</span
                                            ><span
                                                class="counter-text d-inline font-weight-regular mx-2"
                                                >Minutes</span
                                            >
                                        </div>
                                        <div class="counter-item">
                                            <span
                                                class="counter-digit d-inline font-weight-regular"
                                                >{{
                                                    countDown.countSeconds
                                                }}</span
                                            ><span
                                                class="counter-text d-inline font-weight-regular mx-2"
                                                >Seconds</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <v-btn color="accent" to="#" class="btn-shop"
                                >Shop now</v-btn
                            >
                        </div>
                        <SlickCarousel
                            ref="c2"
                            v-bind="slider_nav"
                            class="slider-nav"
                            @beforeChange="syncSliders"
                        >
                            <v-img
                                src="images/data/1-item-a.jpg"
                                max-width="217"
                                class="emb-card img__list"
                                max-height="217"
                            ></v-img>
                            <v-img
                                src="images/data/2-item-a.jpg"
                                max-width="217"
                                class="emb-card img__list"
                                max-height="217"
                            ></v-img>
                            <v-img
                                src="images/data/3-item-a.jpg"
                                max-width="217"
                                max-height="217"
                                class="emb-card img__list"
                            ></v-img>
                            <v-img
                                src="images/data/4-item-a.jpg"
                                max-width="217"
                                max-height="217"
                                class="emb-card img__list"
                            ></v-img>
                        </SlickCarousel>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "day-deal",
    data() {
        return {
            countDownDate: new Date("Nov 7, 2022 00:00:00").getTime(),
            countDown: {
                countDays: 0,
                countHours: 0,
                countMinutes: 0,
                countSeconds: 0,
            },
            slider_for: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                focusOnSelect: true,
                asNavFor: this.$refs.c2,
            },
            slider_nav: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                asNavFor: this.$refs.c1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            centerMode: true,
                            centerPadding: "70px",
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            centerPadding: "65px",
                            slidesToShow: 1,
                        },
                    },
                ],
            },
        };
    },
    mounted() {
        this.updateCountDown();
    },
    methods: {
        syncSliders(currentPosition, nextPosition) {
            this.$refs.c1.goTo(nextPosition);
            this.$refs.c2.goTo(nextPosition);
        },
        handleCountDown() {
            let now = new Date().getTime();
            let distance = this.countDownDate - now;

            if (distance < 0) {
                return false;
            }

            this.countDown.countDays = Math.floor(
                distance / (1000 * 60 * 60 * 24)
            ); // 1s = 100ms, 1m = 60s, 1h = 60m, 1d = 24h ==> s * m * h * d
            this.countDown.countHours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            this.countDown.countMinutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            this.countDown.countSeconds = Math.floor(
                (distance % (1000 * 60)) / 1000
            );

            return true;
        },
        updateCountDown() {
            let lastTime = false;
            const updateTime = setInterval(() => {
                if (!this.handleCountDown()) {
                    lastTime = true;
                }
            }, 1000);

            if (lastTime) {
                clearInterval(updateTime);
            }
        },
    },
};
</script>

<style scoped>
.img__list {
    cursor: pointer;
    padding: 15px;
}
.day-deal-wrap .counter-item {
    display: inline-block;
    margin-right: 15px;
}
.day-deal-wrap span.counter-digit {
    font-size: 3.25rem;
    line-height: 1.5;
}
.btn-shop {
    font-family: Roboto, sans-serif, sans-serif;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    padding: 5px;
    text-decoration: none;
}
.slider-for {
    cursor: pointer;
    pointer-events: none;
}
.galivery {
    max-height: 900px;
}
</style>
