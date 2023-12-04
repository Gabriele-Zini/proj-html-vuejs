<script>
import { store } from '../store'
import AppButton from './AppButton.vue';
export default {
    data() {
        return {
            store,
            heroBoolean: false,
            getStarted:"get started for free", //contenuto del button
            isArrow: true, //variabile booleana per gestire i bottoni con e senza freccia
        }
    },
    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/home-movation-${imgPath}`, import.meta.url).href;
        }
    },
    props: {
        hero: Object,
    },
    components: {
        AppButton
    }

}
</script>

<template>
    <!-- hero -->
    <div class="d-flex">
        <div class="d-flex flex-column justify-content-center ms_hero">
            <h5 class="text-uppercase">{{ hero.overtitle }}</h5>
            <h2 class="text-capitalize">{{ hero.title }}</h2>
            <p>{{ hero.paragraph }}</p>
            <AppButton :isArrow="isArrow" :getStarted="getStarted" />
        </div>
        <img :src="getImage(hero.imgPath)" alt="">
    </div>
    <!-- /hero -->
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

.ms_hero {
    text-align: left;
    line-height: 2.5rem;
    padding-right: 10rem;

    h2 {
        font-size: 3.2rem;
    }
}
</style>