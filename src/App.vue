<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store'

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppFooter,
        AppHeader,
        AppMain,
    }
}
</script>

<template>
    <AppHeader :menu="store.menu" :hero="store.hero" />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss';
@use "@fortawesome/fontawesome-free/css/all.css";
</style>
