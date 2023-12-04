<script>
import { store } from '../store'
import AppButton from './AppButton.vue';
export default {
    data() {
        return {
            store,
            getStarted: "get started for free", //contenuto del button
            isArrow: true, //variabile booleana per gestire i bottoni con e senza freccia
            currentIndex: 0,
            idArray: [],
        }
    },
    mounted() {
        // Inizializza l'array degli ID una volta montato il componente
        return this.idArray = this.store.bigCardData.bigCard2.map(obj => obj.id);
    },

    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/home-movation-${imgPath}`, import.meta.url).href;
        },
        getAvatar(imgPath) {
            return new URL(`../assets/img/testimonial-avata-${imgPath}`, import.meta.url).href;
        },
        prevButton() {
            if (this.currentIndex > 0) {
                this.currentIndex--
            } else {
                // Se l'indice corrente è il primo, vai all'ultimo
                this.currentIndex = this.idArray.length - 1
            }

        },
        nextButton() {
            if (this.currentIndex < this.idArray.length - 1) {
                this.currentIndex++
            } else {
                this.currentIndex = 0
            }

        }
    },


    props: {
        hero: Object,
        heroBoolean: Boolean,
    },
    components: {
        AppButton
    }

}
</script>

<template>
    <!-- hero -->
    <div class="d-flex" v-if="heroBoolean">
        <div class="d-flex flex-column justify-content-center ms_hero">
            <h5 class="text-uppercase"> {{ store.bigCardData.hero.overtitle }}</h5>
            <h2 class="text-capitalize">{{ store.bigCardData.hero.title }}</h2>
            <p>{{ store.bigCardData.hero.paragraph }}</p>
            <AppButton :isArrow="isArrow" :getStarted="getStarted" />
        </div>
        <img :src="getImage(store.bigCardData.hero.imgPath)" alt="">
    </div>
    <!-- /hero -->


    <!-- big card 2 -->
    <div v-for="(item, index) in store.bigCardData.bigCard2" :class="{ 'd-none': currentIndex !== index }">
        <div class="d-flex ms_big-card" v-if="!heroBoolean">
            <div class="d-flex flex-column justify-content-center">
                <h5 class="text-uppercase"> {{ item.overtitle }}</h5>
                <p>{{ item.paragraph }}</p>
                <img class="ms_avatar" :src="getAvatar(item.avatar.imgPath)" alt="">
                <p class="text-center">{{ item.avatar.name }}</p>
            </div>
            <img class="w-50" :src="getImage(item.imgPath)" alt="">
            <div class="ms_next-prev-btn"><span @click="prevButton()" class="ms_prev-button"></span>{{ item.id }} / 4
                <span @click="nextButton" class="ms_next-button"></span>
            </div>
        </div>
    </div>
    <!-- /big card 2 -->
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

/* hero style */
.ms_hero {
    text-align: left;
    line-height: 2rem;
    padding-right: 10rem;


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
.ms_big-card {
    background-image: url('../assets/img/background-pattern-wavify.png');
    background-color: $primary-background-color;
    position: relative;


    .ms_avatar {
        width: 100px;
        align-self: center;
        border-radius: 50%;
        object-fit: cover;
    }

    .ms_next-prev-btn {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        text-align: center;
        line-height: 100px;
        font-weight: bold;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }

    .ms_next-button,
    .ms_prev-button {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        transform: translate(-50%, -50%);
        left: 50%;
    }

    .ms_next-button {
        border-width: 7px 7px 0 7px;
        border-color: $secondary-button-color transparent transparent transparent;
        top: 80%;
        cursor: pointer;
    }

    .ms_prev-button {
        border-width: 0 7px 7px 7px;
        border-color: transparent transparent $secondary-button-color transparent;
        top: 20%;
        cursor: pointer;

    }
}
</style>