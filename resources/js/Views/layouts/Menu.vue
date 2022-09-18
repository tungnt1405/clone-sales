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
                                <div
                                    class="mr-3"
                                    v-for="(item, index) in buttons"
                                    :key="index"
                                >
                                    <v-btn
                                        type="button"
                                        :class="item.class"
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
                                            <v-icon dark>
                                                {{ item.icon }}</v-icon
                                            >
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
                                                <v-list-item
                                                    link
                                                    v-for="(
                                                        item, index
                                                    ) in accounts"
                                                    :key="index"
                                                >
                                                    <v-icon class="mr-2">{{
                                                        item.icon
                                                    }}</v-icon>
                                                    <span>{{
                                                        item.title
                                                    }}</span>
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
            <div class="bottom-header--wrap d-block primary">
                <v-container>
                    <div class="position-relative">
                        <div class="menu-alignment">
                            <div class="text-center">
                                <ul class="pl-0 app-nav-list">
                                    <li
                                        class="app-nav-item"
                                        v-for="(item, index) in menus"
                                        :key="index"
                                    >
                                        <router-link :to="item.path">{{
                                            item.title
                                        }}</router-link>
                                        <ul
                                            class="sub-menu"
                                            v-if="item.sub_menu"
                                        >
                                            <li
                                                v-for="(
                                                    i, ind
                                                ) in item.sub_menu"
                                                :key="ind"
                                            >
                                                <router-link :to="i.path">{{
                                                    i.title
                                                }}</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </v-container>
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
            buttons: [
                {
                    class: "cart-btn",
                    icon: "mdi-cart",
                },
                {
                    class: "favorite-btn",
                    icon: "mdi-heart",
                },
            ],
            accounts: [
                { icon: "mdi-account-circle", title: "User Profile" },
                { icon: "mdi-cog", title: "Account" },
                { icon: "mdi-email", title: "Messages" },
                { icon: "mdi-power", title: "Log Out" },
            ],
            menus: [
                { path: "/", title: "Home" },
                { path: "javascript:void(0)", title: "Shop" },
                {
                    path: "javascript:void(0)",
                    title: "Pages",
                    sub_menu: [
                        { path: "javascript:void(0)", title: "About" },
                        { path: "javascript:void(0)", title: "FAQ" },
                        { path: "javascript:void(0)", title: "Privacy policy" },
                    ],
                },
                { path: "javascript:void(0)", title: "Contact Us" },
            ],
        };
    },
};
</script>

<style></style>
