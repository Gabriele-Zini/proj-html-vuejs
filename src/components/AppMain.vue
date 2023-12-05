<script>
import { store } from '../store'
import AppCard from './AppCard.vue';
import AppBigCard from './AppBigCard.vue';
import AppButton from './AppButton.vue';
export default {
    data() {
        return {
            store,
            hasButton: true,
            buttonText: "View all courses",
            isArrow: true, //variabile booleana per gestire i bottoni con e senza freccia
            href:"",
        }
    },
    components: {
        AppCard, AppBigCard, AppButton
    }
}
</script>

<template>
    <!-- online courses section -->
    <section class="mt-5">
        <h5 class="text-uppercase fs-6 text-center">begin your journey at maxcoach</h5>
        <h2 class="text-center">Latest <span>Online Courses</span> </h2>
        <div class="container-md pt-5">
            <AppCard :appCard="store.littleCard1" />
        </div>
        <div class="d-flex justify-content-center pb-5">
            <AppButton :buttonText="buttonText" :isArrow="isArrow" :href="href" />
        </div>
    </section>
    <!-- /online courses section -->



    <!--  real stories section -->
    <section>
        <AppBigCard :bigCard="store.bigCardData" />
    </section>
    <!--  /real stories section -->


    <!-- blog section -->
    <section>
        <div class="my-5">
            <div class="container-md mb-5">
                <h5 class="text-uppercase fs-6 text-left mb-4">blog updated</h5>
                <h2 class="text-left">Intersting <span>articles updated</span> daily</h2>
            </div>
            <div class="container-md">
                <AppCard :appCard="store.littleCard2" :hasButton="hasButton" />
            </div>
        </div>
    </section>
    <!-- /blog section -->



</template>

<style scoped lang="scss"></style>