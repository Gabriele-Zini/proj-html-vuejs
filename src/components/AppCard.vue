<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            showAllPosts: false, // Variabile booleana per gestire la visualizzazione di tutti i post
            maxVisiblePosts: 4, // Numero massimo di post visibili di default

        }
    },
    props: {
        appCard: Object,
        hasButton: Boolean, /* valore booleano per gestire la presenza o meno del bottone toggleAllPosts nelle card */
        hasHover: Boolean,

    },
    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
        },

        /*  metodo per formattare il paragrafo e visualizzare massimo i primi 49 caratteri */
        getShortenedParagraph(paragraph) {
            const maxLength = 60;
            if (paragraph.length <= maxLength) {
                return paragraph;
            } else {
                return paragraph.substring(0, maxLength) + "..."; /* metodo substring per sostituire i caratteri del paragrafo maggiori di 49 */
            }
        },

        /* metodo per determinare la condizione per far visualizzare di default solo i primi 4 posts */
        shouldHide(index) {
            return !this.showAllPosts && index >= this.maxVisiblePosts;
        },
        /*  metodo per mostrare o nascondere tutti i posts */
        toggleAllPosts() {
            this.showAllPosts = !this.showAllPosts;
        },
    }
}

</script>

<template>
    <div v-for="(item, index) in appCard" :key="index" class="card col-3 p-0 ms_card-4"
        :class="{ 'ms_card col-md-4': item.price, 'd-none': item.title && shouldHide(index) }">

        <!-- Effetto hover con icone -->
        <div v-if="hasHover" class="ms_hover flex-column gap-3">
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            <a href=""><i class="fa-regular fa-heart"></i></a>
            <a href=""><i class="fa-solid fa-signal"></i></a>
        </div>

        <!-- Immagine della card -->
        <img :src="getImage(item.imgPath)" class="card-img-top " alt="...">

        <!-- Contenuto della card -->
        <div class="card-body p-0 mt-4" :class="{ 'px-4': item.price }">
            <!-- Data della card -->
            <p class="ms_paragraph-color" v-if="item.date">
                <i class="fa-regular fa-calendar me-2 overtitle"></i>{{ item.date }}
            </p>

            <!-- Titolo della card -->
            <h5 class="card-title ms_title" v-if="item.title" :class="{ 'text-center ms_title-color': hasHover }">
                {{ item.title }}
            </h5>

            <!-- Prezzo della card -->
            <div v-if="item.price" :class="{ 'text-center mb-5': hasHover }">
                <span class="ms_price-before-decimal">{{ Math.floor(item.price) }}</span>
                <span class="ms_price-after-decimal">
                    .{{ (item.price % 1).toFixed(2).slice(2) }}
                </span>
            </div>

            <!-- Paragrafo della card -->
            <p v-if="item.paragraph" class="card-text ms_paragraph"
                :class="{'ms_paragraph-color mt-4': item.date}">
                {{ getShortenedParagraph(item.paragraph) }}
            </p>

            <!-- Informazioni aggiuntive sulla card -->
            <div v-if="item.numberLesson && item.numberStudent" class="d-flex justify-content-between">
                <p><i class="fa-regular fa-file-lines me-2"></i> {{ item.numberLesson }} Lessons</p>
                <p><i class="fa-regular fa-user me-2"></i> {{ item.numberStudent }} Students</p>
            </div>
        </div>
    </div>

    <!-- Bottone per mostrare/nascondere tutti i post: possiamo decidere se utilizzarlo o meno con la prop booleana hasButton -->
    <div v-if="hasButton">
        <div v-if="!showAllPosts" @click="toggleAllPosts(index)" class="ms_all-posts-button" href="">
            view all posts
        </div>
        <div v-else @click="toggleAllPosts(index)" class="ms_all-posts-button" href="">
            less posts
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

.ms_card-4 {
    width: calc(100% / 4 - 2rem);
    margin-bottom: 2.5rem;
    border: none;
}

.ms_title {
    font-size: 1.1rem;
    font-weight: bold;
}

.ms_title-color {
    color: $paragraph-color;
}
.ms_paragraph-color {
    color: $overtitle-primary-color;
    font-weight: bold;
    font-size: .9rem;
}

.ms_card {
    width: calc(100% / 3 - 2rem);
    border: 2px solid transparent;
    position: relative;


    .ms_paragraph {
        font-size: 1.1rem;
        font-weight: bold;
        color: $paragraph-color;
    }


    .ms_price-before-decimal {
        font-weight: bold;
        color: $secondary-font-color;
        font-size: 1.5rem;
    }

    .ms_price-after-decimal {
        font-size: 1rem;
        color: $secondary-font-color;
        font-weight: bold;
    }

    .ms_hover {
        display: none;
    }



    &:hover {
        transition: box-shadow 0.2s ease;
        box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.060);

        .ms_hover {
            position: absolute;
            top: 20%;
            right: 20%;
            display: flex;
            transition: filter 0.3s ease;

            a {
                color: black;
                text-decoration: none;

                i {
                    height: 40px;
                    width: 40px;
                    background-color: white;
                    display: inline-block;
                    border-radius: 50%;
                    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.241);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        background-color: $button-hover;
                        color: white;
                    }
                }
            }
        }
    }
}


.ms_all-posts-button {
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
    color: $secondary-font-color;
    font-weight: bold;
    border-bottom: 2px solid $secondary-font-color;
    width: fit-content;
    margin: 0 auto;
}</style>