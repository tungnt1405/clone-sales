<template>
    <div id="root">
        <nprogress-container></nprogress-container>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view />
    </div>
</template>

<script>
import systemcf from "./mixins/systemcf";
export default {
    mixins: [systemcf],
};
</script>

<style></style>
