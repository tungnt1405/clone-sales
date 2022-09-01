<template>
    <div class="emb-aboutus-wrap">
        <div class="page-title-bar">
            <v-container>
                <h1 class="mb-4">About Us</h1>
                <p class="text-white font-weight-regular">
                    Creative team and wide goals.
                </p>
            </v-container>
        </div>
        <div class="emb-about-content">
            <div class="about-page section-gap">
                <v-container class="grid-list-xl">
                    <div class="layout row wrap align-center">
                        <div class="flex xs12 sm12 md12 lg6 xl6 pr-5">
                            <h2 class="font-weight-bold font-italic mb-6">
                                Providing the optimize E-commerce servicing to
                                millions of customers form last 10 year
                            </h2>
                            <h4 class="font-weight-bold mb-6">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Cupiditate nihil non quo
                                corrupti, laborum hic,
                            </h4>
                            <p class="mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquam dolore neque
                                consequatur harum suscipit hic nisi voluptate
                                nulla deserunt! Ducimus odit nisi aliquam non
                                quae exercitationem? Impedit dolores aliquam
                                suscipit! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor eaque illo, dolore
                                voluptates ipsum ratione. At eius earum
                                voluptatibus aperiam porro a quo, obcaecati
                                dolor distinctio provident iusto libero ducimus?
                            </p>
                            <!-- <button
                                type="button"
                                class="accent mx-0 v-btn v-btn--contained theme--light v-size--large"
                            >
                                <span class="v-btn__content">Read More</span>
                            </button> -->
                            <v-btn
                                class="mx-0 white--text text-small"
                                color="#ff5722"
                                large
                                depressed
                                >Read More</v-btn
                            >
                        </div>
                        <div
                            class="flex xs12 md12 lg6 xl6 text-lg-left text-center"
                        >
                            <v-img
                                alt="About us Figure"
                                lazy-src="/images/data/about-us.jpg"
                                src="/images/data/about-us.jpg"
                                width="700"
                            ></v-img>
                        </div>
                    </div>
                </v-container>
            </div>
            <div class="about-info section-gap bg-grey">
                <div class="container grid-list-xl py-0">
                    <div class="layout row wrap align-center mb-md-0 mb-6">
                        <div
                            class="flex xl6 sm12 xs12 md6 lg6 text-md-left text-center"
                        >
                            <v-img
                                lazy-src="/images/data/our-mission.jpg"
                                src="/images/data/our-mission.jpg"
                                alt="mission"
                                width="569"
                            ></v-img>
                        </div>
                        <div class="flex pl-12 xl6 xs12 md6 lg6">
                            <h2 class="font-weight-bold">Our Mission</h2>
                            <h5 class="font-italic">
                                nulla dolor dicta laborum unde molestias ab
                                magni.Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quaerat quibusdam cum
                                blanditiis voluptas, voluptates hic eius maxime
                                dolorum saepe quae animi eveniet nulla dolor
                                dicta laborum unde molestias ab magni.Lorem
                                ipsum dolor sit amet, consectetur adipisicing
                                elit. Quaerat quibusdam cum blanditiis voluptas,
                                voluptates hic eius maxime dolorum saepe quae
                                animi eveniet nulla dolor dicta laborum unde
                                molestias ab magni.
                            </p>
                        </div>
                    </div>
                    <div class="layout row wrap align-center reverse">
                        <div class="flex xl6 xs12 md6 lg6">
                            <v-img
                                lazy-src="/images/data/our-vision.jpg"
                                src="/images/data/our-vision.jpg"
                                alt="vission"
                                width="569"
                            ></v-img>
                        </div>
                        <div class="flex pr-12 xl6 xs12 md6 lg6">
                            <h2 class="font-bold">Our Vision</h2>
                            <h5 class="font-italic">
                                nulla dolor dicta laborum unde molestias ab
                                magni.Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quaerat quibusdam cum
                                blanditiis voluptas, voluptates hic eius maxime
                                dolorum saepe quae animi eveniet nulla dolor
                                dicta laborum unde molestias ab magni.Lorem
                                ipsum dolor sit amet, consectetur adipisicing
                                elit. Quaerat quibusdam cum blanditiis voluptas,
                                voluptates hic eius maxime dolorum saepe quae
                                animi eveniet nulla dolor dicta laborum unde
                                molestias ab magni.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonail-v2 text-center section-gap">
                <div class="container grid-list-xl py-0">
                    <div class="layout row wrap align-center justify-center">
                        <div class="flex xl6 sm12 md8 lg6">
                            <!-- <div class="slider"> -->
                            <VueSlickCarousel v-bind="settings">
                                <div>
                                    <div>
                                        <div>
                                            <div class="sec-title">
                                                <h2 class="white--text">
                                                    Albert Gomez
                                                </h2>
                                            </div>
                                            <div
                                                class="testi-card-v2 mb-6 text-center"
                                            >
                                                <div
                                                    class="layout row wrap align-center justify-center"
                                                >
                                                    <div
                                                        class="flex xs5 sm4 md5 lg4 xl3 text-center user-img"
                                                    >
                                                        <v-img
                                                            lazy-src="/images/data/user-1.jpg"
                                                            src="/images/data/user-1.jpg"
                                                            width="200"
                                                            height="200"
                                                            alt="team-image"
                                                            class="br-100 text-center mx-auto"
                                                        ></v-img>
                                                        <!-- <img
                                                            src="/images/data/user-1.jpg"
                                                            width="200"
                                                            height="200"
                                                            alt="team-image"
                                                            class="br-100 text-center mx-auto"
                                                        /> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="testi-content text-center"
                                            >
                                                <h4
                                                    class="font-weight-medium mb-0 white--text"
                                                >
                                                    Albert Gomez
                                                </h4>
                                                <p
                                                    class="text-inverse white--text"
                                                >
                                                    Head, ABS Infos
                                                </p>
                                                <p
                                                    class="text-inverse testi-content white--text"
                                                >
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Autexpedita quasi
                                                    voluptatibus tenetur nisi ad
                                                    earum atque laboriosam
                                                    accusamus. Doloremque
                                                    sapiente aliquid quae. Animi
                                                    ratione dolorum repellat
                                                    amet nihil? Magnam?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div class="sec-title">
                                                <h2 class="white--text">
                                                    Tristan Cyrus
                                                </h2>
                                            </div>
                                            <div
                                                class="testi-card-v2 mb-6 text-center"
                                            >
                                                <div
                                                    class="layout row wrap align-center justify-center"
                                                >
                                                    <div
                                                        class="flex xs5 sm4 md5 lg4 xl3 text-center user-img"
                                                    >
                                                        <v-img
                                                            lazy-src="/images/data/user-2.jpg"
                                                            src="/images/data/user-2.jpg"
                                                            width="200"
                                                            height="200"
                                                            alt="team-image"
                                                            class="br-100 text-center mx-auto"
                                                        ></v-img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="testi-content text-center"
                                            >
                                                <h4
                                                    class="font-weight-medium mb-0 white--text"
                                                >
                                                    Tristan Cyrus
                                                </h4>
                                                <p
                                                    class="text-inverse white--text"
                                                >
                                                    Head, ABS Infos
                                                </p>
                                                <p
                                                    class="text-inverse testi-content white--text"
                                                >
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Autexpedita quasi
                                                    voluptatibus tenetur nisi ad
                                                    earum atque laboriosam
                                                    accusamus. Doloremque
                                                    sapiente aliquid quae. Animi
                                                    ratione dolorum repellat
                                                    amet nihil? Magnam?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div class="sec-title">
                                                <h2 class="white--text">
                                                    Kendrick Younes
                                                </h2>
                                            </div>
                                            <div
                                                class="testi-card-v2 mb-6 text-center"
                                            >
                                                <div
                                                    class="layout row wrap align-center justify-center"
                                                >
                                                    <div
                                                        class="flex xs5 sm4 md5 lg4 xl3 text-center user-img"
                                                    >
                                                        <v-img
                                                            lazy-src="/images/data/user-3.jpg"
                                                            src="/images/data/user-3.jpg"
                                                            width="200"
                                                            height="200"
                                                            alt="team-image"
                                                            class="br-100 text-center mx-auto"
                                                        ></v-img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="testi-content text-center"
                                            >
                                                <h4
                                                    class="font-weight-medium mb-0 white--text"
                                                >
                                                    Kendrick Younes
                                                </h4>
                                                <p
                                                    class="text-inverse white--text"
                                                >
                                                    Head, ABS Infos
                                                </p>
                                                <p
                                                    class="text-inverse testi-content white--text"
                                                >
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Autexpedita quasi
                                                    voluptatibus tenetur nisi ad
                                                    earum atque laboriosam
                                                    accusamus. Doloremque
                                                    sapiente aliquid quae. Animi
                                                    ratione dolorum repellat
                                                    amet nihil? Magnam?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div class="sec-title">
                                                <h2 class="white--text">
                                                    Beljium Hugh
                                                </h2>
                                            </div>
                                            <div
                                                class="testi-card-v2 mb-6 text-center"
                                            >
                                                <div
                                                    class="layout row wrap align-center justify-center"
                                                >
                                                    <div
                                                        class="flex xs5 sm4 md5 lg4 xl3 text-center user-img"
                                                    >
                                                        <v-img
                                                            lazy-src="/images/data/user-4.jpg"
                                                            src="/images/data/user-4.jpg"
                                                            width="200"
                                                            height="200"
                                                            alt="team-image"
                                                            class="br-100 text-center mx-auto"
                                                        ></v-img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="testi-content text-center"
                                            >
                                                <h4
                                                    class="font-weight-medium mb-0 white--text"
                                                >
                                                    Beljium Hugh
                                                </h4>
                                                <p
                                                    class="text-inverse white--text"
                                                >
                                                    Head, ABS Infos
                                                </p>
                                                <p
                                                    class="text-inverse testi-content white--text"
                                                >
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Autexpedita quasi
                                                    voluptatibus tenetur nisi ad
                                                    earum atque laboriosam
                                                    accusamus. Doloremque
                                                    sapiente aliquid quae. Animi
                                                    ratione dolorum repellat
                                                    amet nihil? Magnam?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </VueSlickCarousel>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="team-section text-center section-gap blue-grey lighten-5 mb-3"
            >
                <v-container class="grid-list-xl text-xl-center">
                    <div class="sec-title"><h2>Meet Our Crew</h2></div>
                    <div class="layout row wrap align-center justify-center">
                        <div
                            class="flex xs12 sm12 md4 lg4 x14 tetx-center mb-sm-0 mb-3"
                        >
                            <div class="team-card md-6">
                                <v-img
                                    lazy-src="/images/data/user-1.jpg"
                                    src="/images/data/user-1.jpg"
                                    width="200"
                                    height="200"
                                    class="br-100 m-auto"
                                ></v-img>
                                <!-- <img
                                    src="/images/data/user-1.jpg"
                                    width="200"
                                    height="200"
                                    class="br-100"
                                /> -->
                            </div>
                            <div class="team-content">
                                <h4 class="mb-0">Anthony Gilbert</h4>
                                <p class="mb-6">CEO</p>
                                <p class="mb-6">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Doloremque esse iure
                                    aliquid enim, corrupti distinctio sit
                                    praesentium ducimus incidunt rem facilis
                                    expedita illo at tempore natus nihil
                                    veritatis accusamus vel.
                                </p>
                            </div>
                        </div>
                        <div
                            class="flex xs12 sm12 md4 lg4 x14 tetx-center mb-sm-0 mb-3"
                        >
                            <div class="team-card md-6">
                                <v-img
                                    lazy-src="/images/data/user-2.jpg"
                                    src="/images/data/user-2.jpg"
                                    width="200"
                                    height="200"
                                    class="br-100 m-auto"
                                ></v-img>
                            </div>
                            <div class="team-content">
                                <h4 class="mb-0">Jonathan Salvatore</h4>
                                <p class="mb-6">Chief-Executive</p>
                                <p class="mb-6">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Doloremque esse iure
                                    aliquid enim, corrupti distinctio sit
                                    praesentium ducimus incidunt rem facilis
                                    expedita illo at tempore natus nihil
                                    veritatis accusamus vel.
                                </p>
                            </div>
                        </div>
                        <div
                            class="flex xs12 sm12 md4 lg4 x14 tetx-center mb-sm-0 mb-3"
                        >
                            <div class="team-card md-6">
                                <v-img
                                    lazy-src="/images/data/user-3.jpg"
                                    src="/images/data/user-3.jpg"
                                    width="200"
                                    height="200"
                                    class="br-100 m-auto"
                                ></v-img>
                            </div>
                            <div class="team-content">
                                <h4 class="mb-0">Alexis Rive</h4>
                                <p class="mb-6">Sr. Supervisor</p>
                                <p class="mb-6">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Doloremque esse iure
                                    aliquid enim, corrupti distinctio sit
                                    praesentium ducimus incidunt rem facilis
                                    expedita illo at tempore natus nihil
                                    veritatis accusamus vel.
                                </p>
                            </div>
                        </div>
                    </div>
                </v-container>
            </div>
            <div class="about-contact-form">
                <div class="layout row wrap">
                    <div
                        class="flex about-contact-bg xs12 sm12 md6 lg6 xl6"
                    ></div>
                    <div class="flex xs12 sm12 md6 lg6 xl6 section-gap">
                        <div class="about-contact-form-inner">
                            <div><h2 class="mb-3">Write to Us</h2></div>
                            <form novalidate="novalidate" class="v-form">
                                <div
                                    class="v-input theme--light v-text-field v-text-field--is-booted v-text-field--placeholder"
                                >
                                    <div class="v-input__control">
                                        <div class="v-input__slot">
                                            <div class="v-text-field__slot">
                                                <input
                                                    id="input-240"
                                                    placeholder="First Name"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="v-text-field__details">
                                            <div
                                                class="v-messages theme--light"
                                            >
                                                <div
                                                    class="v-messages__wrapper"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="v-input theme--light v-text-field v-text-field--is-booted v-text-field--placeholder"
                                >
                                    <div class="v-input__control">
                                        <div class="v-input__slot">
                                            <div class="v-text-field__slot">
                                                <input
                                                    id="input-243"
                                                    placeholder="Last Name"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="v-text-field__details">
                                            <div
                                                class="v-messages theme--light"
                                            >
                                                <div
                                                    class="v-messages__wrapper"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="v-input theme--light v-text-field v-text-field--is-booted v-text-field--placeholder"
                                >
                                    <div class="v-input__control">
                                        <div class="v-input__slot">
                                            <div class="v-text-field__slot">
                                                <input
                                                    id="input-246"
                                                    placeholder="Email"
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                        <div class="v-text-field__details">
                                            <div
                                                class="v-messages theme--light"
                                            >
                                                <div
                                                    class="v-messages__wrapper"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="v-input theme--light v-text-field v-text-field--is-booted v-text-field--placeholder"
                                >
                                    <div class="v-input__control">
                                        <div class="v-input__slot">
                                            <div class="v-text-field__slot">
                                                <input
                                                    id="input-249"
                                                    placeholder="Subject"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="v-text-field__details">
                                            <div
                                                class="v-messages theme--light"
                                            >
                                                <div
                                                    class="v-messages__wrapper"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="v-input v-textarea theme--light v-text-field v-text-field--is-booted"
                                >
                                    <div class="v-input__control">
                                        <div class="v-input__slot">
                                            <div class="v-text-field__slot">
                                                <label
                                                    for="input-252"
                                                    class="v-label theme--light"
                                                    style="
                                                        left: 0px;
                                                        right: auto;
                                                        position: absolute;
                                                    "
                                                    >Leave a Message</label
                                                ><textarea
                                                    id="input-252"
                                                    rows="2"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="v-text-field__details">
                                            <div
                                                class="v-messages theme--light"
                                            >
                                                <div
                                                    class="v-messages__wrapper"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <v-btn
                                    class="mx-0 white--text"
                                    color="#ff5722"
                                    large
                                    depressed
                                    >Send Message</v-btn
                                >
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import slick from "../../mixins/slick.js";
export default {
    name: "AboutComponent",
    mixins: [slick],
};
</script>

<style scoped>
.v-btn {
    text-transform: capitalize !important;
}
</style>
