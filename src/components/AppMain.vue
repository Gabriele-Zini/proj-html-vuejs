<script>
import { store } from '../store'
import AppCard from './AppCard.vue';
import AppBigCard from './AppBigCard.vue';
import AppButton from './AppButton.vue';
import AppBook from './AppBook.vue';
import AppClientLogo from './AppClientLogo.vue';
import AppAboutMe from './AppAboutMe.vue';
export default {
    data() {
        return {
            store,
            hasButton: true,
            buttonText: "View all courses",
            isArrow: true, //variabile booleana per gestire i bottoni con e senza freccia
            href: "",

        }
    },
    components: {
        AppCard, AppBigCard, AppButton, AppBook, AppClientLogo, AppAboutMe,
    }
}
</script>


<template>
    <main>
        <!-- about me section -->
        <div class="container-md">
            <AppAboutMe :resultData="store.resultData" />
        </div>
        <!-- /about me section -->

        <!-- online courses section -->
        <section class="mt-5">
            <h5 class="text-uppercase text-center overtitle-primary-color fw-bold mb-4">begin your journey at maxcoach</h5>
            <h2 class="text-center font-serif paragraph-color">Latest <span class="secondary-font-color">Online Courses</span> </h2>
            <div class="container-md pt-5">
                <div class="row justify-content-between">
                    <AppCard :appCard="store.littleCard1" />
                </div>
            </div>
            <div class="d-flex justify-content-center pb-5">
                <AppButton :buttonText="buttonText" :isArrow="isArrow" :href="href" />
            </div>
        </section>
        <!-- /online courses section -->


        <!--  wingman book section -->
        <section>
            <AppBook />
        </section>
        <!-- /wingman book section -->

        <!--  client Logo -->
        <section class="container-md p-0">
            <AppClientLogo :clientLogo="store.clientLogo" />
        </section>
        <!--  /client Logo -->


        <!--  real stories section -->
        <section>
            <AppBigCard :bigCard="store.bigCardData" />
        </section>
        <!--  /real stories section -->



        <!-- blog section -->
        <section>
            <div class="my-5">
                <div class="container-md mb-5">
                    <h5 class="text-uppercase text-left mb-4 overtitle-secondary-color fw-bold">blog updated</h5>
                    <h2 class="text-left font-serif">Intersting <span class="secondary-font-color">articles updated</span> daily
                    </h2>
                </div>
                <div class="container-md">
                    <div class="row justify-content-between">
                        <AppCard :appCard="store.littleCard2" :hasButton="hasButton" />
                    </div>
                </div>
            </div>
        </section>
        <!-- /blog section -->

    </main>
</template>

<style scoped lang="scss">
section {
    padding: 2rem 0;
}
</style>