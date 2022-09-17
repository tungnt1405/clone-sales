<template>
    <div class="headers">
        <div class="header-wrap">
            <div class="top-header--wrap d-block primary">
                <div class="top-header">
                    <v-container>
                        <div
                            class="d-flex flex-nowrap align-center justify-space-between min-w-0 w-100 py-5"
                        >
                            <span>&nbsp;</span>
                            <div class="top-header--logo d-inline-block">
                                <router-link :to="{ name: 'Home' }"
                                    ><v-img
                                        :src="logo"
                                        :lazy-src="logo"
                                        width="224"
                                        height="34"
                                    ></v-img
                                ></router-link>
                            </div>
                            <div
                                class="top-header--notification d-inline-flex align-items-center"
                            >
                                <div class="mr-3">
                                    <v-btn
                                        type="button"
                                        class="cart-btn"
                                        color="accent"
                                        :dark="true"
                                        small
                                        fab
                                        depressed
                                    >
                                        <v-badge
                                            color="accent"
                                            :content="value"
                                            :value="value"
                                        >
                                            <v-icon dark> mdi-cart </v-icon>
                                        </v-badge></v-btn
                                    >
                                </div>
                                <div class="mr-3">
                                    <v-btn
                                        type="button"
                                        class="favorite-btn"
                                        color="accent"
                                        :dark="true"
                                        small
                                        fab
                                        depressed
                                    >
                                        <v-badge
                                            color="accent"
                                            :content="value"
                                            :value="value"
                                        >
                                            <v-icon dark> mdi-heart </v-icon>
                                        </v-badge></v-btn
                                    >
                                </div>
                                <div>
                                    <v-menu
                                        bottom
                                        offset-y
                                        rounded
                                        max-width="200"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                fab
                                                :dark="false"
                                                small
                                                v-on="on"
                                            >
                                                <v-avatar>
                                                    <img
                                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                        alt="John"
                                                    /> </v-avatar
                                            ></v-btn>
                                        </template>
                                        <v-card>
                                            <v-list-item-content
                                                class="justify-center"
                                            >
                                                <v-list-item link>
                                                    <v-icon class="mr-2"
                                                        >mdi-account-circle</v-icon
                                                    >
                                                    <span>User Profile</span>
                                                </v-list-item>
                                                <v-list-item link>
                                                    <v-icon class="mr-2"
                                                        >mdi-cog</v-icon
                                                    >
                                                    <span>Account</span>
                                                </v-list-item>
                                                <v-list-item link>
                                                    <v-icon class="mr-2"
                                                        >mdi-email</v-icon
                                                    >
                                                    <span>Messages</span>
                                                </v-list-item>
                                                <v-list-item link>
                                                    <v-icon class="mr-2"
                                                        >mdi-power</v-icon
                                                    >
                                                    <span>Log Out</span>
                                                </v-list-item>
                                            </v-list-item-content>
                                        </v-card>
                                    </v-menu>
                                </div>
                            </div>
                        </div>
                    </v-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data: () => {
        return {
            logo: "../images/common/logo.png",
            value: 1,
        };
    },
};
</script>

<style></style>
