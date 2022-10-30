<template>
    <div class="feature-product__wrap section__gap title__gap">
        <v-container>
            <div class="section__gap-title">
                <h2 class="text-center font-weight-bold">Featured Products</h2>
            </div>
            <div class="tab-bar__wrap text-center flex-column">
                <div class="py-5">
                    <v-tabs v-model="tabs" fixed-tabs>
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab
                            :href="'#mobile-tabs-5-' + (index + 1)"
                            v-for="(val, index) in bar_wrap"
                            :key="index"
                        >
                            <v-btn class="d-inline-block">
                                {{ val }}
                            </v-btn>
                        </v-tab>
                    </v-tabs>
                </div>
                <div>
                    <v-tabs-items v-model="tabs">
                        <v-tab-item
                            v-for="i in 4"
                            :key="i"
                            :value="'mobile-tabs-5-' + i"
                        >
                            <v-card flat>
                                <v-card-text v-text="text"></v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "featured-products",
    props: ["bar_wrap"],
    data() {
        return {
            tabs: null,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        };
    },
};
</script>

<style scoped>
h2,
h2 a {
    font-size: 2.813rem !important;
}
.section__gap .section__gap-title {
    margin-bottom: 3rem;
}
.tab-bar__wrap {
    overflow-x: hidden;
    display: flex;
    padding: 0 20px 35px;
    margin: auto;
    justify-content: center;
}
.feature-product__wrap
    .tab-bar__wrap
    .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: transparent;
}
.feature-product__wrap .tab-bar__wrap .v-btn {
    box-shadow: none;
    border-radius: 5px;
}
</style>
