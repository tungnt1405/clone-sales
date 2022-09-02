<template>
    <div class="emb-contact-wrap">
        <div class="page-title-bar">
            <v-container>
                <h1 class="mb-4">Contact Us</h1>
                <p class="text-white font-weight-regular">
                    Share your feedback with us.
                </p>
            </v-container>
        </div>
        <div class="emb-contact-content">
            <div class="Contact-page">
                <div class="contact-map">
                    <div>
                        <!-- :options="{
                                disableDefaultUI: true,
                                zoomControl: true,
                            }" -->
                        <GmapMap
                            :center="center"
                            :zoom="20"
                            map-type-id="terrain"
                            style="width: 100%; height: 400px"
                            ><gmap-marker
                                :position="marker.position"
                                @click="center = marker.position"
                                ref="map"
                            ></gmap-marker>
                        </GmapMap>
                    </div>
                </div>
            </div>
            <div class="contact-info-wrapper">
                <v-container class="grid-list-xl py-0">
                    <div class="section-gap">
                        <div class="layout row wrap">
                            <div class="flex sm12 md12 lg5 xl5">
                                <div class="sec-title">
                                    <h2
                                        class="v-layout justify-start align-center"
                                    >
                                        Contact Info
                                    </h2>
                                    <h5 class="font-italic mb-6 text-justify">
                                        If you have any problems, suggestions
                                        and feedback then please feel free to
                                        contact with us. Choose our
                                        communication sources. We will love to
                                        hear from you
                                    </h5>
                                </div>
                                <div
                                    class="mb-6"
                                    v-for="(info, index) in infoContact"
                                    :key="index"
                                >
                                    <h3>{{ info.title }}</h3>
                                    <a
                                        :href="info.href"
                                        class="color-inherit"
                                        >{{ info.content }}</a
                                    >
                                </div>
                            </div>
                            <div class="flex sm12 md12 lg7 x17">
                                <div class="sec-title">
                                    <h2>Write to Us</h2>
                                </div>
                                <v-form
                                    ref="form"
                                    lazy-validation
                                    v-model="valid"
                                    @submit.prevent="submit"
                                >
                                    <v-text-field
                                        v-model="formContact.firstName"
                                        placeholder="First Name"
                                        :rules="NotBlank"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="formContact.lastName"
                                        placeholder="Last Name"
                                        :rules="NotBlank"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="formContact.email"
                                        placeholder="Email"
                                        :rules="EmailRules"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="formContact.subject"
                                        placeholder="Subject"
                                        :rules="NotBlank"
                                    ></v-text-field>
                                    <v-textarea
                                        v-model="formContact.message"
                                        rows="2"
                                        :rules="NotBlank"
                                    >
                                        <template v-slot:label
                                            >Leave a Message</template
                                        >
                                    </v-textarea>
                                    <v-btn
                                        color="accent"
                                        class="mt-4 mx-0"
                                        large
                                        @click="submit()"
                                        >Send Message</v-btn
                                    >
                                </v-form>
                            </div>
                        </div>
                    </div>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
import gmaps from "../../mixins/gmaps.js";
export default {
    mixins: [gmaps],
    data: () => {
        return {
            valid: true,
            formContact: {
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            },
            infoContact: [
                {
                    title: "Call",
                    href: "tel:12346788",
                    content: "+123 90394903",
                },
                {
                    title: "Mail",
                    href: "mailto:support@theironnetwork.org",
                    content: "support@theironnetwork.org",
                },
                {
                    title: "Address",
                    href: "javascript:void(0)",
                    content: "1899 Cemetery Street,MEDFORD - 1452451 New York",
                },
            ],
            NotBlank: [
                (v) => !!v || "This field should not be empty",
                (v) =>
                    (v && v.length <= 10) ||
                    "This field must be less than 10 characters",
            ],
            EmailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
            ],
        };
    },
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        submit() {
            alert("Please enter");
        },
    },
};
</script>

<style></style>
