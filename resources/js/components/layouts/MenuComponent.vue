<template>
    <v-container>
        <div
            class="bottom-header-inner d-flex align-center justify-content-center"
        >
            <div class="menu-alignment">
                <div class="navbar">
                    <ul class="app-nav-list pl-0">
                        <li
                            class="app-nav-item"
                            v-for="(menu, index) in menus"
                            :key="index"
                        >
                            <router-link :to="menu.href"
                                >{{ menu.title }}
                            </router-link>
                            <ul class="sub-menu" v-if="menu.sub_menu">
                                <li
                                    v-for="(sub, index) in menu.sub_menu"
                                    :key="index"
                                >
                                    <router-link :to="sub.href">{{
                                        sub.sub_title
                                    }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            menus: [
                {
                    title: "Home",
                    href: "/",
                },
            ],
        };
    },
};
</script>

<style scoped></style>
