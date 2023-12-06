<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppButton from './AppButton.vue';
export default {
    data() {
        return {
            appCard: store.bookStore,
            buttonText: "get free ebook",
            hasHover: true,

        }
    },
    components: {
        AppCard, AppButton,
    }

}

</script>

<template>
    <section class="container-md">
        <div class="d-flex justify-content-center gap-4">
            <div class="d-flex flex-column pe-5 h-100">
                <h5 class="text-uppercase text-left mb-4 fw-bold overtitle-secondary-color">book store online</h5>
                <h2 class="text-left paragraph-color pe-5 font-serif">Be Alpha With <span class="secondary-font-color">Wingman's book</span></h2>
                <ul class="list-unstyled  d-flex flex-column gap-3 mt-4 mb-5 overtitle-primary-color ">
                    <li><i class="fa-solid fa-check me-2"></i>Help you understand yourself better</li>
                    <li><i class="fa-solid fa-check me-2"></i>Revealing mature tips</li>
                    <li><i class="fa-solid fa-check me-2"></i>Give the right advice</li>
                    <li><i class="fa-solid fa-check me-2"></i>Fascinating example of Alpha Man</li>
                </ul>
                <AppButton :buttonText="buttonText" />
            </div>
            <AppCard :appCard="appCard" :hasHover="hasHover" />
        </div>


    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/_variables.scss' as *;

h2 {
font-size: 3rem;
line-height: 4rem;
}

li {
    font-size: .9rem;
    font-weight: bold;

    i {
        color: $secondary-font-color;
        font-size: 1.2rem;
    }
}
</style>