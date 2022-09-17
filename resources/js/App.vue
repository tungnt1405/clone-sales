<template>
    <v-app>
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

<style></style>
