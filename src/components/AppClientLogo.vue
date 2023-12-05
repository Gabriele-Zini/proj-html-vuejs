<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        clientLogo: Object,
    },
    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/client-logo-${imgPath}-primary.png`, import.meta.url).href;
        },
    }
}

</script>

<template>
    <div class="d-flex gap-5 justify-content-between align-items-center ms_img-container">
        <div v-for="logo in clientLogo">
            <img :src="getImage(logo.imgPath)" :alt="clientLogo.alt">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_img-container {
  padding:60px 0 120px 0;

    img {
        max-width: 100%;
        filter: opacity(.3);

    }
}
</style>