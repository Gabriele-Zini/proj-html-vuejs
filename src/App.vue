<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default {
    components: {
        AppFooter,
        AppHeader,
        AppMain,
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss';
@use "@fortawesome/fontawesome-free/css/all.css";
</style>
