<script>
import AppBigCard from './AppBigCard.vue'
import { store } from '../store.js'
import AppButton from './AppButton.vue';
import AppSocialLogos from './AppSocialLogos.vue';
export default {
    data() {
        return {
            store,
            buttonText: "get started for free", //contenuto del button
            isArrow: true, //variabile booleana per gestire i bottoni con e senza freccia
            hasPrimary:true,
            href:"", //href del button
            style: {
                fontSize: "1.2rem",
            },


        }
    },
    components: {
        AppBigCard, AppButton, AppSocialLogos
    },
    props: {
        menu: Object,
        hero: Object,
    },
    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/home-movation-${imgPath}`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <header>
        <div class="container-md">

            <!-- navbar -->
            <nav class="d-flex justify-content-between align-items-center">
                <img src="../assets/img/dark-logo.png" alt="logo">

                <!-- menu items list: tramite props si itera su un array di oggetti che contengono gli items del menù della navbar -->
                <ul class="list-unstyled d-flex gap-5 m-0">
                    <li v-for="item in menu" :key="item" class="d-flex gap-1">
                        <a :href="item.href">{{ item.text }}</a>
                        <a href=""><i class="fa-solid fa-angle-down"></i></a>
                    </li>
                </ul>
                <!-- /menu items list -->

                <!-- social logo link list -->
                <AppSocialLogos :hasPrimary="hasPrimary" :style="style" />
                <!-- /social logo link list -->


            </nav>
            <!-- /navbar -->
        </div>

        <div class="ms_hero container-md">



            <!-- hero -->
            <div class="d-flex">
                <div class="d-flex flex-column justify-content-center ms_hero">
                    <h5 class="text-uppercase"> {{ hero.overtitle }}</h5>
                    <h2 class="text-capitalize">{{ hero.title }}</h2>
                    <p>{{ hero.paragraph }}</p>
                    <AppButton :isArrow="isArrow" :buttonText="buttonText" :href="href" />
                </div>
                <img :src="getImage(hero.imgPath)" alt="">
            </div>
            <!-- /hero -->


        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

header {
    background-color: $primary-background-color;
    background-image: url('../assets/img/background-pattern-wavify.png');


    nav {
        height: 80px;

        img {
            width: 180px;
        }

        a {
            text-decoration: none;
            color: $secondary-header-color;

            .fa-angle-down {
                font-size: .7rem;
            }
        }

        .fa-brands {
            font-size: 1.2rem;
            color: $primary-header-color;
        }
    }


    /* hero style */
    .ms_hero {
        text-align: left;
        line-height: 2rem;
        padding-right: 5rem;


        img {
            background-image: url('../assets/img/home-movation-shape-face.png');
            background-position: 0 200px;
            background-repeat: no-repeat;

        }

        h2 {
            font-size: 3.2rem;
            padding-right: 10rem;
            line-height: 5rem;
        }
    }

    /* /hero style */
}
</style>