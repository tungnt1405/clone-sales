<template>
    <div class="headers" ref="headers">
        <div class="header-wrap">
            <div class="top-header--wrap d-block primary">
                <div class="top-header">
                    <v-container>
                        <div
                            class="d-flex flex-nowrap align-center justify-space-between min-w-0 w-100 py-5"
                        >
                            <span class="hidden-md-and-down"
                                >&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&ensp;&nbsp;</span
                            >
                            <div class="top-header--logo d-inline-block">
                                <router-link :to="{ name: 'Home' }"
                                    ><v-img
                                        contain
                                        :src="logo"
                                        :lazy-src="logo"
                                        max-width="224"
                                        cover
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
                                            <v-icon
                                                dark
                                                class="menu__icon"
                                                :small="
                                                    !isTablet ? false : true
                                                "
                                            >
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
                        <div class="menu-alignment" v-if="!isSearch">
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
                        <label
                            for="nav__menu-sp"
                            class="nav__menu-icon"
                            v-if="!isSearch"
                        >
                            <v-icon color="white">mdi-menu</v-icon>
                        </label>
                        <input type="checkbox" id="nav__menu-sp" hidden />
                        <label
                            for="nav__menu-sp"
                            class="nav__menu-overlay"
                        ></label>
                        <nav class="nav__menu">
                            <div
                                class="nav__menu-close d-flex justify-content-end pt-2 mx-4 text-center"
                            >
                                <v-btn
                                    small
                                    depressed
                                    width="35px"
                                    height="35px"
                                    min-width="35px"
                                    ><label for="nav__menu-sp">
                                        <v-icon style="cursor: pointer"
                                            >mdi-close</v-icon
                                        >
                                    </label></v-btn
                                >
                            </div>
                            <v-list-item-content>
                                <v-list-item-group light>
                                    <v-list-item dark link multiple>
                                        <v-list-item-title class="px-0 pl-2">
                                            <v-icon>mdi-home</v-icon>
                                            <a
                                                href="/"
                                                class="white--text text-decoration-none"
                                                >Home</a
                                            >
                                        </v-list-item-title>
                                        <v-list-item-action>
                                            <v-list-item-icon>
                                                <v-icon class="float-right"
                                                    >mdi-menu-down</v-icon
                                                >
                                            </v-list-item-icon>
                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-list-item dark link multiple>
                                        <v-list-item-title class="px-0 pl-2">
                                            <v-icon>mdi-home</v-icon>
                                            <a
                                                href="/about"
                                                class="white--text text-decoration-none"
                                                >about</a
                                            >
                                        </v-list-item-title>
                                        <v-list-item-action>
                                            <v-list-item-icon>
                                                <v-icon class="float-right"
                                                    >mdi-menu-down</v-icon
                                                >
                                            </v-list-item-icon>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list-item-content>
                        </nav>
                        <div>
                            <div class="search-box">
                                <v-btn
                                    color="accent"
                                    fab
                                    small
                                    class="btn__search-box"
                                    @click="isSearch = true"
                                    v-if="!isSearch"
                                >
                                    <v-icon>mdi-magnify</v-icon></v-btn
                                >
                            </div>
                            <div class="search-form" v-if="isSearch">
                                <v-form>
                                    <v-text-field
                                        placeholder="Search"
                                        class="input__search"
                                        hide-details="true"
                                        solo
                                    >
                                    </v-text-field>
                                    <v-btn @click="isSearch = false" depressed>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-form>
                            </div>
                        </div>
                    </div>
                </v-container>
            </div>
        </div>
        <div class="fixedHeader" :class="{ menu__active: showMenuFixed }">
            <div class="fixed__header-wrap">
                <div class="header-wrap primary" style="padding: 0">
                    <v-container class="grid-list-xl">
                        <div
                            class="layout align-center justify-space-between row ma-0"
                        >
                            <div class="top-header--logo d-inline-block">
                                <router-link :to="{ name: 'Home' }"
                                    ><v-img
                                        contain
                                        :src="logo"
                                        :lazy-src="logo"
                                        max-width="224"
                                        cover
                                    ></v-img
                                ></router-link>
                            </div>
                            <div>
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
                                                        <router-link
                                                            :to="i.path"
                                                            >{{
                                                                i.title
                                                            }}</router-link
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <label
                                    for="nav__menu-sp"
                                    class="nav__menu-icon"
                                    style="padding-right: 15px"
                                >
                                    <v-icon color="white">mdi-menu</v-icon>
                                </label>
                            </div>
                        </div>
                    </v-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import breakpoints from "../../mixins/breakpoints";
export default {
    name: "Menu",
    mixins: [breakpoints],
    data: () => {
        return {
            isSearch: false,
            showMenuFixed: false,
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
                { path: "#", title: "Shop" },
                {
                    path: "#",
                    title: "Pages",
                    sub_menu: [
                        { path: "/about", title: "About" },
                        { path: "javascript:void(0)", title: "FAQ" },
                        { path: "javascript:void(0)", title: "Privacy policy" },
                    ],
                },
                { path: "javascript:void(0)", title: "Contact Us" },
            ],
        };
    },
    created() {
        window.addEventListener("scroll", this.scrollFunction);
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollFunction);
    },
    methods: {
        scrollFunction(event) {
            let elementHeight = this.$refs.headers.clientHeight;
            if (window.pageYOffset > elementHeight) {
                this.showMenuFixed = true;
                return;
            }
            this.showMenuFixed = false;
        },
    },
};
</script>

<style scoped>
.search-box {
    z-index: 5;
    position: absolute;
    text-align: center;
    bottom: -31px;
    right: 0;
}
.search-box .btn__search-box {
    width: 40px;
    height: 40px;
}

.search-form .v-form .v-btn {
    position: absolute;
    right: 2px;
    bottom: 5px;
    height: 40px;
    background-color: #fff !important;
    box-shadow: none;
}
.input__search {
    padding: 0 1rem;
    border: 0;
    font-size: 2rem;
    height: 100%;
    overflow: hidden;
    width: 100%;
    z-index: 9;
    background-color: #fff !important;
}
.input__search:focus-within {
    border: 3px solid rgb(168, 231, 114);
}
@media only screen and (max-width: 46.1875em) {
    .search-box {
        bottom: -5px;
    }
    .search-box .btn__search-box {
        width: 35px;
        height: 35px;
    }
}
</style>
