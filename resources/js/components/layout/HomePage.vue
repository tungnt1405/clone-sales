<template>
    <div class="banner">
        <div class="d-flex flex-column flex-md-row justify-between">
            <div class="ml-md-5 px-5">
                <v-img
                    src="images/data/slider-1.jpg"
                    class="banner__slide"
                    max-width="1050"
                    max-height="660"
                ></v-img>
            </div>
            <div
                class="d-flex flex-column justify-between px-5 px-md-0 mt-md-0 mt-5 mt-md-0"
                style="gap: 10px"
            >
                <v-img
                    src="images/data/aside-1.jpg"
                    class="emb-card"
                    max-width="547"
                    max-height="315"
                ></v-img>
                <v-img
                    src="images/data/aside-2.jpg"
                    class="emb-card"
                    max-width="547"
                    max-height="315"
                ></v-img>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeComponent",
};
</script>

<style></style>
