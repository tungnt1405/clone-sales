<template>
    <v-app>
        <nprogress-container></nprogress-container>
        <div class="headers">
            <div class="header-wrap">
                <div class="top-header-wrap d-block primary">
                    <div class="top-header">
                        <SideBarComponent></SideBarComponent>
                    </div>
                </div>
                <div class="bottom-header d-block primary">
                    <MenuComponent></MenuComponent>
                </div>
            </div>
        </div>
        <router-view />
        <div class="footer section-gap">
            <FooterComponent></FooterComponent>
        </div>
    </v-app>
</template>

<script>
import systemcf from "./mixins/systemcf";
import SideBarComponent from "./components/layouts/SideBarComponent.vue";
import MenuComponent from "./components/layouts/MenuComponent.vue";
import FooterComponent from "./components/layouts/FooterComponent.vue";
export default {
    mixins: [systemcf],
    components: { SideBarComponent, MenuComponent, FooterComponent },
};
</script>

<style></style>
