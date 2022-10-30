<template>
    <v-app id="inspire">
        <Menu />
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import Menu from "./Views/layouts/Menu.vue";
export default { components: { Menu } };
</script>

<style scoped>
.v-main {
    background-color: #fafafa !important;
}
</style>
