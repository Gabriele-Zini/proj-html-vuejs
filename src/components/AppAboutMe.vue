<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getImage(imgPath) {
            return new URL(`${imgPath}`, import.meta.url).href;
        },
    },
    props: {
        resultData: Array,
    }
}
</script>

<template>
    <div class="ms_container-section">

        <ul class="list-unstyled d-flex justify-content-center">
            <li v-for="result in resultData" class="d-flex justify-content-center flex-column align-items-center">
                <p class="secondary-font-color">{{ result.rate }}</p>
                <p class="text-uppercase overtitle-secondary-color fw-bold">{{ result.category }}</p>
            </li>

        </ul>

        <div class="d-flex mb-5">
            <div>
                <p class="text-uppercase mb-4 secondary-font-color fw-bold ms_about-me letter-spacing">about me</p>
                <h3 class="fs-1 font-serif">How to Be an Alpha Male: The 15 Habits of True Alphas</h3>
            </div>
            <div class="ms_alpha-male d-flex flex-column justify-content-center">
                <h4 class="fs-6 fw-bold">Want to learn how to be <span class="secondary-font-color">an alpha male</span>? How to be more masculine? How to be the
                    man you've
                    always wanted to be?</h4>
                <p class="mt-2 overtitle-primary-color fw-bold lh-lg">Your goal is to show the consistency of the business, core values and customer care.
                    Punctuality,
                    responasability, individuality, accuracy, enthusiasm- you have to clearly explain how these qualities
                    nare applicable to your work. And th important thing is you do love what you do.</p>
            </div>
        </div>
        <div class="d-flex">
            <div class="w-100 ms_img-container">
                <img :src="getImage('../assets/img/icon-youtube-play.png')" alt="" class="ms_youtube">
                <img :src="getImage('../assets/img/home-movation-video-poster-670x450.jpg')" alt="">
            </div>
            <div class="d-flex flex-column align-items-start ms_paragraph-container justify-content-center">
                <p class="fs-3 ms_paragraph">"Every moring you have two choices: continue to sleep with your dreams, or wake
                    up
                    and chase them."</p>
                <img :src="getImage('../assets/img/home-movation-shape-01.png')" alt="wingman" class="my-4">
                <h3 class="fs-4 fw-bold">Kaixa Stark</h3>
                <p class="text-uppercase ms_little-p overtitle-secondary-color fw-bold">wingman</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/_variables.scss' as *;
.ms_container-section {
    margin: 8rem 0;


    .ms_img-container {
        position: relative;
        .ms_youtube {
            position: absolute;
            width: 80px;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
        }
        img {
            border-radius: 5px;
            width: 100%;
        }
    }

    ul {
        margin-bottom: 5rem;

        li {
            border-left: 3px dotted $ms-light-gray;
            padding: 0 2rem;
            width: calc(100% / 4);
        }

        li:last-child {
            border-right: 3px dotted $ms-light-gray;
        }

        p:first-of-type {
            font-size: 2.5rem;
            margin: 0;
            font-weight: bold;
        }
    }

    h3 {
        line-height: 3.5rem;
        padding-right: 15rem;
    }

    .ms_alpha-male {
        justify-content: space-between;
        width: 90%;
        margin-right: 5rem;

        h4 {
            line-height: 2rem;
        }

    }

    .ms_paragraph-container {
        padding: 2rem 6rem;



        img {
            object-fit: contain;
        }

        .ms_paragraph {
            line-height: 3rem;
            margin-bottom: 2rem;
        }

        .ms_little-p {
            font-size: .8rem;
        }
    }
}
</style>