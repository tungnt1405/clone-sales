<template>
    <v-row>
        <v-col cols="12">
            <div class="about__header">
                <div class="about__header-title mb-4">About Us</div>
                <div class="about__header-body">
                    Creative team and wide goals
                </div>
            </div>
            <div class="about__content">
                <div class="about__page section__gap">
                    <v-row>
                        <v-container class="grid-list-xl d-flex flex-wrap">
                            <v-col
                                cols="12"
                                lg="6"
                                class="section__gap-body pr-5"
                            >
                                <div class="section__gap-title">
                                    <h2
                                        class="font-weight-bold font-italic mb-6"
                                    >
                                        Providing the optimize E-commerce
                                        servicing to millions of customers form
                                        last 10 year
                                    </h2>
                                    <h4 class="font-weight-bold mb-6">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Cupiditate nihil non
                                        quo corrupti, laborum hic,
                                    </h4>
                                    <p class="mb-6">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aliquam dolore neque
                                        consequatur harum suscipit hic nisi
                                        voluptate nulla deserunt! Ducimus odit
                                        nisi aliquam non quae exercitationem?
                                        Impedit dolores aliquam suscipit! Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Dolor eaque illo,
                                        dolore voluptates ipsum ratione. At eius
                                        earum voluptatibus aperiam porro a quo,
                                        obcaecati dolor distinctio provident
                                        iusto libero ducimus?
                                    </p>
                                    <v-btn color="accent" large
                                        >Read More</v-btn
                                    >
                                </div>
                            </v-col>
                            <v-col cols="12" lg="6" class="section__gap-image">
                                <div class="text-center text-lg-left">
                                    <v-img
                                        src="images/data/about-us.jpg"
                                        lazy-src="images/data/about-us.jpg"
                                    ></v-img>
                                </div>
                            </v-col>
                        </v-container>
                    </v-row>
                </div>
                <div class="about__info section__gap blue-grey lighten-5">
                    <v-row>
                        <v-container class="grid-list-xl d-flex flex-wrap">
                            <v-col cols="12" lg="6" class="section__gap-image">
                                <div class="text-center text-lg-left">
                                    <v-img
                                        src="images/data/our-mission.jpg"
                                        lazy-src="images/data/our-mission.jpg"
                                        contain
                                    ></v-img>
                                </div>
                            </v-col>
                            <v-col
                                cols="12"
                                lg="6"
                                class="section__gap-body pr-5"
                            >
                                <div class="section__gap-title">
                                    <h2
                                        class="font-weight-bold font-italic mb-6"
                                    >
                                        Our Mission
                                    </h2>
                                    <h4 class="font-weight-bold mb-6">
                                        nulla dolor dicta laborum unde molestias
                                        ab magni.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit
                                    </h4>
                                    <p class="mb-6">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quaerat quibusdam cum
                                        blanditiis voluptas, voluptates hic eius
                                        maxime dolorum saepe quae animi eveniet
                                        nulla dolor dicta laborum unde molestias
                                        ab magni.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Quaerat
                                        quibusdam cum blanditiis voluptas,
                                        voluptates hic eius maxime dolorum saepe
                                        quae animi eveniet nulla dolor dicta
                                        laborum unde molestias ab magni.
                                    </p>
                                </div>
                            </v-col>
                        </v-container>
                    </v-row>
                    <v-row>
                        <v-container
                            class="grid-list-xl d-flex flex-wrap flex-lg-row-reverse"
                        >
                            <v-col cols="12" lg="6" class="section__gap-image">
                                <div class="text-center text-lg-left">
                                    <v-img
                                        src="images/data/our-vision.jpg"
                                        lazy-src="images/data/our-vision.jpg"
                                        contain
                                    ></v-img>
                                </div>
                            </v-col>
                            <v-col
                                cols="12"
                                lg="6"
                                class="section__gap-body pr-5"
                            >
                                <div class="section__gap-title">
                                    <h2
                                        class="font-weight-bold font-italic mb-6"
                                    >
                                        Our Vision
                                    </h2>
                                    <h4 class="font-weight-bold mb-6">
                                        nulla dolor dicta laborum unde molestias
                                        ab magni.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit
                                    </h4>
                                    <p class="mb-6">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quaerat quibusdam cum
                                        blanditiis voluptas, voluptates hic eius
                                        maxime dolorum saepe quae animi eveniet
                                        nulla dolor dicta laborum unde molestias
                                        ab magni.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Quaerat
                                        quibusdam cum blanditiis voluptas,
                                        voluptates hic eius maxime dolorum saepe
                                        quae animi eveniet nulla dolor dicta
                                        laborum unde molestias ab magni.
                                    </p>
                                </div>
                            </v-col>
                        </v-container>
                    </v-row>
                </div>
                <div class="about__slick text-center section__gap">
                    <about-component></about-component>
                </div>
                <div class="about__info section__gap blue-grey lighten-5">
                    <div
                        class="about__info-title text-center"
                        style="
                            font-size: 3rem;
                            font-weight: bold;
                            padding-bottom: 1em;
                        "
                    >
                        Meet Our Crew
                    </div>
                    <v-row>
                        <v-col cols="12" md="4">
                            <div
                                class="about__info-body d-flex justify-content-center"
                            >
                                <div class="align-items-center text-center">
                                    <v-img
                                        class="rounded-lg rounded-circle text-center mx-auto"
                                        lazy-src="images/data/user-3.jpg"
                                        src="images/data/user-3.jpg"
                                        width="200"
                                        contain
                                    ></v-img>
                                    <p>
                                        <span
                                            style="
                                                font-size: 1.5rem;
                                                font-weight: bold;
                                            "
                                            >Alexis Rive</span
                                        >
                                        <small>Sr. Supervisor</small>
                                    </p>
                                    <p class="mt-3">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Sit praesentium
                                        ducimus incidunt rem facilis expedita
                                        illo at tempore natus nihil veritatis
                                        accusamus vel.
                                    </p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div
                                class="about__info-body d-flex justify-content-center"
                            >
                                <div class="align-items-center text-center">
                                    <v-img
                                        class="rounded-lg rounded-circle text-center mx-auto"
                                        lazy-src="images/data/user-3.jpg"
                                        src="images/data/user-3.jpg"
                                        width="200"
                                        contain
                                    ></v-img>
                                    <p>
                                        <span
                                            style="
                                                font-size: 1.5rem;
                                                font-weight: bold;
                                            "
                                            >Alexis Rive</span
                                        >
                                        <small>Sr. Supervisor</small>
                                    </p>
                                    <p class="mt-3">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Sit praesentium
                                        ducimus incidunt rem facilis expedita
                                        illo at tempore natus nihil veritatis
                                        accusamus vel.
                                    </p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div
                                class="about__info-body d-flex justify-content-center"
                            >
                                <div class="align-items-center text-center">
                                    <v-img
                                        class="rounded-lg rounded-circle text-center mx-auto"
                                        lazy-src="images/data/user-3.jpg"
                                        src="images/data/user-3.jpg"
                                        width="200"
                                        contain
                                    ></v-img>
                                    <p>
                                        <span
                                            style="
                                                font-size: 1.5rem;
                                                font-weight: bold;
                                            "
                                            >Alexis Rive</span
                                        >
                                        <small>Sr. Supervisor</small>
                                    </p>
                                    <p class="mt-3">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Sit praesentium
                                        ducimus incidunt rem facilis expedita
                                        illo at tempore natus nihil veritatis
                                        accusamus vel.
                                    </p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import AboutComponent from "../../components/about/AboutComponent.vue";
export default {
    components: { AboutComponent },
};
</script>

<style scoped>
.about__info-body p {
    padding-top: 16px;
}
.about__info-body p span {
    display: block;
}
.about__info-body p small {
    padding: 0;
    font-size: 13px;
}
</style>
