<script>
import { store } from '../store'
import AppCard from './AppCard.vue';
import AppBigCard from './AppBigCard.vue';
export default {
    data() {
        return {
            store,
            heroBoolean: true,
        }
    },
    components: {
        AppCard, AppBigCard,
    }
}
</script>

<template>
    <AppBigCard :heroBoolean="!heroBoolean" />
</template>

<style scoped lang="scss"></style>