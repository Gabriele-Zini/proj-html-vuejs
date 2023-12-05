<script>
import { store } from '../store'
import AppCard from './AppCard.vue';
import AppBigCard from './AppBigCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCard, AppBigCard,
    }
}
</script>

<template>
        <AppBigCard :bigCard="store.bigCardData" />
</template>

<style scoped lang="scss"></style>