<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            showAllPosts: false,
            maxVisiblePosts: 4,

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
            const maxLength = 49;
            if (paragraph.length <= maxLength) {
                return paragraph;
            } else {
                return paragraph.substring(0, maxLength) + "..."; /* metodo substring per sostituire i caratteri del paragrafo maggiori di 49 */
            }
        },

        /* metodo per determinare la condizione per far visualizzare di default solo i primi 4 posts */
        shouldHide(item, index) {
            return !this.showAllPosts && item.title && index >= this.maxVisiblePosts;
        },
        /*  metodo per mostrare o nascondere tutti i posts */
        toggleAllPosts() {
            this.maxVisiblePosts = this.showAllPosts ? 4 : this.store.littleCard2.length;
            this.showAllPosts = !this.showAllPosts;
        },
    }
}

</script>

<template>
    <!-- card -->
    <div v-for="(item, index) in appCard" :key="index" class="card col-3 p-0 ms_card-4"
        :class="{ 'ms_card col-md-4': item.price, 'd-none': item.title && shouldHide(item, index) }">
        <div v-if="hasHover" class="ms_hover flex-column gap-3">
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            <a href=""><i class="fa-regular fa-heart"></i></a>
            <a href=""><i class="fa-solid fa-signal"></i></a>
        </div>
        <img :src="getImage(item.imgPath)" class="card-img-top " alt="...">
        <div class="card-body p-0 mt-4" :class="{ 'px-4': item.price }">
            <p v-if="item.date"><i class="fa-regular fa-calendar me-2"></i>{{ item.date }}</p>
            <h5 class="card-title ms_title" v-if="item.title" :class="{ 'text-center ms_title-color': hasHover }">
                {{ item.title }}
            </h5>
            <div v-if="item.price" :class="{ 'text-center mb-5': hasHover }">
                <span class="ms_price-before-decimal">{{ Math.floor(item.price) }}</span>
                <span class="ms_price-after-decimal">.{{ (item.price % 1).toFixed(2).slice(2) }}</span>
            </div>
            <p v-if="item.paragraph" class="card-text ms_paragraph">{{ getShortenedParagraph(item.paragraph) }}</p>
            <div v-if="item.numberLesson || item.numberStudent" class="d-flex justify-content-between">
                <p><i class="fa-regular fa-file-lines me-2"></i> {{ item.numberLesson }} Lessons
                </p>
                <p><i class="fa-regular fa-user me-2"></i> {{ item.numberStudent }} Students</p>
            </div>
        </div>
    </div>
    <!-- /card -->

    <!-- show more posts button with a boolean prop -->
    <div v-if="hasButton">
        <div v-if="!showAllPosts" @click="toggleAllPosts(index)" class="ms_all-posts-button" href="">view all posts
        </div>
        <div v-else @click="toggleAllPosts(index)" class="ms_all-posts-button" href="">less posts</div>
    </div>
    <!-- /show more posts button with a boolean prop -->
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.ms_card-4 {
    width: calc(100% / 4 - 2rem);
    margin-bottom: 2.5rem;
    border: none;
}
.ms_title {
        font-size:1.5rem;
        font-weight: bold;
    }

.ms_title-color {
    color: $paragraph-color;
}

.ms_card {
    width: calc(100% / 3 - 2rem);
    border: 2px solid transparent;
    position: relative;

    .ms_price-before-decimal {
        font-weight: bold;
        color: $secondary-font-color;
        font-size: 2rem;
    }

    .ms_paragraph {
        font-size:1.5rem;
        font-weight: bold;
        color: $paragraph-color;
    }

    .ms_price-after-decimal {
        font-size: 1.3rem;
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
                }
            }
        }
    }


}

.ms_all-posts-button {
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
}
</style>