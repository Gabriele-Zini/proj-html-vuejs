<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        appCard: Object,

    },
    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/motivation-${imgPath}`, import.meta.url).href;
        },
        getShortenedParagraph(paragraph) {
            const maxLength = 49;
            if (paragraph.length <= maxLength) {
                return paragraph;
            } else {
                return paragraph.substring(0, maxLength) + "...";
            }

        },
    }
}

</script>

<template>
    <div class="row justify-content-between">
        <div class="card col-3 p-0 ms_card-4" :class="{ 'ms_card col-md-4': item.price }" v-for="item in appCard">
            <img :src="getImage(item.imgPath)" class="card-img-top " alt="...">
            <div class="card-body px-4">
                <p v-if="item.title"><i class="fa-regular fa-calendar me-2"></i>{{ item.date }}</p>
                <h5 class="card-title" v-if="item.title">
                    {{ item.title }}
                </h5>
                <div v-else>
                    <span class="ms_price-before-decimal">{{ item.price.toFixed(0) }}</span>
                    <span class="ms_price-after-decimal">{{ (item.price % 1).toFixed(2).substring(1) }}</span>
                </div>
                <p class="card-text">{{ getShortenedParagraph(item.paragraph) }}..</p>
                <div v-if="item.numberLesson || item.numberStudent" class="d-flex justify-content-between">
                    <p><i class="fa-regular fa-file-lines me-2"></i> {{ item.numberLesson }} Lessons
                    </p>
                    <p><i class="fa-regular fa-user me-2"></i> {{ item.numberStudent }} Students</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_card-4 {
    width: calc(100% / 4 - 2rem);
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
</style>