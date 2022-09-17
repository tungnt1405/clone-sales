<template>
    <!-- <div class="main mt-4">
        <router-view></router-view>
    </div> -->
    <v-app>
        <v-system-bar app color="primary"> header </v-system-bar>
        <v-app-bar app color="primary"> Menu </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {};
</script>

<style></style>
