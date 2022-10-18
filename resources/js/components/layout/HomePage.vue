<template>
    <div class="d-flex justify-center banner">
        <div class="banner__slide">
            <v-img src="images/data/slider-1.jpg"></v-img>
        </div>
        <div class="d-flex flex-column banner__slide-emb">
            <v-img src="images/data/aside-1.jpg" class="emb-card"></v-img>
            <v-img src="images/data/aside-2.jpg" class="emb-card"></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeComponent",
};
</script>

<style scoped>
.banner__slide-emb {
    gap: 15px;
}
</style>
