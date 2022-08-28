<template>
    <v-container>
        <div class="layout align-center justify-space-between">
            <div class="site-logo d-inline-block">
                <router-link to="/">
                    <img :src="logo" alt="Logo" />
                </router-link>
            </div>
            <v-spacer></v-spacer>
            <div class="notifications d-inline-flex align-items-center">
                <div class="mr-3">
                    <v-btn class="accent" fab elevation small>
                        <v-tab>
                            <v-badge color="#ff5722" content="1">
                                <v-icon>mdi-cart</v-icon>
                            </v-badge>
                        </v-tab>
                    </v-btn>
                </div>
                <div class="mr-3">
                    <v-btn class="accent" fab elevation small>
                        <v-tab>
                            <v-badge color="#ff5722" content="1">
                                <v-icon>mdi-heart</v-icon>
                            </v-badge>
                        </v-tab>
                    </v-btn>
                </div>
                <div>
                    <v-avatar>
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        />
                    </v-avatar>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    props: {
        logo: {
            type: String,
            default: "/images/common/logo.png",
        },
    },
};
</script>

<style scoped>
.v-application .accent {
    background-color: #ff5722 !important;
    border-color: #ff5722 !important;
}
</style>
