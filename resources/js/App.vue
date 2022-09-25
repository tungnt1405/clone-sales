<template>
    <v-app id="inspire">
        <Menu />
        <v-main app style="height: 1080px">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import Menu from "./Views/layouts/Menu.vue";
export default { components: { Menu } };
</script>

<style></style>
