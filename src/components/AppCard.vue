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
        <img :src="getImage(item.imgPath)" class="card-img-top " alt="...">
        <div class="card-body p-0 mt-4" :class="{ 'px-4': item.price }">
            <p v-if="item.date"><i class="fa-regular fa-calendar me-2"></i>{{ item.date }}</p>
            <h5 class="card-title" v-if="item.title">
                {{ item.title }}
            </h5>
            <div v-if="item.price">
                <span class="ms_price-before-decimal">{{ item.price.toFixed(0) }}</span>
                <span class="ms_price-after-decimal">{{ (item.price % 1).toFixed(2).substring(1) }}</span>
            </div>
            <p v-if="item.paragraph" class="card-text">{{ getShortenedParagraph(item.paragraph) }}..</p>
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
.ms_card-4 {
    width: calc(100% / 4 - 2rem);
    margin-bottom: 2.5rem;
    border: none;
}

.ms_card {
    width: calc(100% / 3 - 2rem);
    border: 2px solid transparent;

    .ms_price-before-decimal {
        font-weight: bold;
    }

    .ms_price-after-decimal {
        font-size: 0.8em;
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