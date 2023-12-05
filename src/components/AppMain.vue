<script>
import { store } from '../store'
import AppCard from './AppCard.vue';
import AppBigCard from './AppBigCard.vue';
export default {
    data() {
        return {
            store,
            hasButton: true,
        }
    },
    components: {
        AppCard, AppBigCard,
    }
}
</script>

<template>
    <div class="mt-5">
        <h5 class="text-uppercase fs-6 text-center">begin your journey at maxcoach</h5>
        <h2 class="text-center">Latest <span>Online Courses</span> </h2>
        <div class="container-md py-5">
            <AppCard :appCard="store.littleCard1" />
        </div>
    </div>
    <AppBigCard :bigCard="store.bigCardData" />
    <div class="my-5">
        <div class="container-md mb-5">
            <h5 class="text-uppercase fs-6 text-left mb-4">begin your journey at maxcoach</h5>
            <h2 class="text-left">Latest <span>Online Courses</span> </h2>
        </div>
        <div class="container-md">
            <AppCard :appCard="store.littleCard2" :hasButton="hasButton"/>
           
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>