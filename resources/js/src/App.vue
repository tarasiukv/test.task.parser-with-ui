<script setup>
import {provide} from "vue";
import store from "@store/store.js";

provide('store', store);
</script>

<template>
    <main class="main">
        <router-view/>
    </main>
</template>

<style scoped>

</style>
