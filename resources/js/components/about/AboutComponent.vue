<template>
    <v-container>
        <SlickCarousel v-bind="slick">
            <div class="about__slick-slide">
                <div class="about__slick-title">Kendrick Younes1</div>
                <div class="about__slick-profile">
                    <v-img
                        class="rounded-lg rounded-circle text-center mx-auto about__slick-img"
                        lazy-src="images/data/user-3.jpg"
                        src="images/data/user-3.jpg"
                        max-width="200"
                        contain
                    ></v-img>
                    <p>Kendrick Younes</p>
                    <p>Head, ABS Infos</p>
                </div>
                <div class="about__slick-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quo exercitationem error. Voluptatibus, hic
                    illo! Perferendis libero sapiente aut dignissimos, vitae
                    esse nesciunt voluptas modi dicta, quia nisi. Nesciunt,
                    molestias.
                </div>
            </div>
            <div class="about__slick-slide">
                <div class="about__slick-title">Kendrick Younes2</div>
                <div class="about__slick-profile">
                    <v-img
                        class="rounded-lg rounded-circle text-center mx-auto about__slick-img"
                        lazy-src="images/data/user-3.jpg"
                        src="images/data/user-3.jpg"
                        max-width="200"
                        contain
                    ></v-img>
                    <p>Kendrick Younes</p>
                    <p>Head, ABS Infos</p>
                </div>
                <div class="about__slick-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quo exercitationem error. Voluptatibus, hic
                    illo! Perferendis libero sapiente aut dignissimos, vitae
                    esse nesciunt voluptas modi dicta, quia nisi. Nesciunt,
                    molestias.
                </div>
            </div>
            <div class="about__slick-slide">
                <div class="about__slick-title">Kendrick Younes3</div>
                <div class="about__slick-profile">
                    <v-img
                        class="rounded-lg rounded-circle text-center mx-auto about__slick-img"
                        lazy-src="images/data/user-3.jpg"
                        src="images/data/user-3.jpg"
                        max-width="200"
                        contain
                    ></v-img>
                    <p>Kendrick Younes</p>
                    <p>Head, ABS Infos</p>
                </div>
                <div class="about__slick-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quo exercitationem error. Voluptatibus, hic
                    illo! Perferendis libero sapiente aut dignissimos, vitae
                    esse nesciunt voluptas modi dicta, quia nisi. Nesciunt,
                    molestias.
                </div>
            </div>
            <div class="about__slick-slide">
                <div class="about__slick-title">Kendrick Younes4</div>
                <div class="about__slick-profile">
                    <v-img
                        class="rounded-lg rounded-circle text-center mx-auto about__slick-img"
                        lazy-src="images/data/user-3.jpg"
                        src="images/data/user-3.jpg"
                        max-width="200"
                        contain
                    ></v-img>
                    <p>Kendrick Younes</p>
                    <p>Head, ABS Infos</p>
                </div>
                <div class="about__slick-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quo exercitationem error. Voluptatibus, hic
                    illo! Perferendis libero sapiente aut dignissimos, vitae
                    esse nesciunt voluptas modi dicta, quia nisi. Nesciunt,
                    molestias.
                </div>
            </div>
            <div class="about__slick-slide">
                <div class="about__slick-title">Kendrick Younes5</div>
                <div class="about__slick-profile">
                    <v-img
                        class="rounded-lg rounded-circle text-center mx-auto about__slick-img"
                        lazy-src="images/data/user-3.jpg"
                        src="images/data/user-3.jpg"
                        max-width="200"
                        contain
                    ></v-img>
                    <p>Kendrick Younes</p>
                    <p>Head, ABS Infos</p>
                </div>
                <div class="about__slick-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quo exercitationem error. Voluptatibus, hic
                    illo! Perferendis libero sapiente aut dignissimos, vitae
                    esse nesciunt voluptas modi dicta, quia nisi. Nesciunt,
                    molestias.
                </div>
            </div>
        </SlickCarousel>
    </v-container>
</template>

<script>
export default {
    name: "AboutComponent",
    data: () => {
        return {
            slick: {
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
            },
        };
    },
};
</script>

<style scoped>
.about__slick-img {
    width: 150px;
    height: 150px;
    margin-bottom: 15px;
}
.about__slick-profile p:first-of-type {
    margin-bottom: 0 !important;
    font-size: 20px;
    line-height: 1.6;
}
.about__slick-profile p:last-of-type {
    margin-bottom: 1em;
    font-size: 11px;
    line-height: 1.6;
}

.about__slick-info {
    padding-bottom: 30px;
}

@media only screen and (max-width: 64em) {
    .about__slick-img {
        width: 100px;
        height: 100px;
    }
}
@media only screen and (max-width: 46.1875em) {
    .about__slick-img {
        width: 70px;
        height: 70px;
    }
    .about__slick-info {
        font-size: 14px;
    }
}
</style>
