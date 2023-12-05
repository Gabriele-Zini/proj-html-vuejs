<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppButton from './AppButton.vue';
export default {
    data() {
        return {
            appCard: store.bookStore,
            buttonText: "get free ebook"
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
            <div class="d-flex flex-column p-5 h-100">
                <h5 class="text-uppercase fs-6 text-left mb-4">book store online</h5>
                <h2 class="text-left">Be Alpha With <span>Wingman's book</span></h2>
                <ul class="list-unstyled ">
                    <li><i class="fa-solid fa-check me-2"></i>Help you understand yourself better</li>
                    <li><i class="fa-solid fa-check me-2"></i>Help you understand yourself better</li>
                    <li><i class="fa-solid fa-check me-2"></i>Help you understand yourself better</li>
                    <li><i class="fa-solid fa-check me-2"></i>Help you understand yourself better</li>
                </ul>
                <AppButton :buttonText="buttonText" />
            </div>
            <AppCard :appCard="appCard" />
        </div>
    </section>
</template>

<style lang="scss"></style>