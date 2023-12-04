<script>
export default {
    data() {
        return {

        }

    },
    props: {
        getStarted: String,
        isArrow: Boolean,
    }
}
</script>

<template>
    <button class="ms_btn">{{ getStarted }} <i v-show="isArrow" class="fa-solid fa-arrow-right ms-2"></i></button>
</template>

<style lang="scss" scoped>
@use '../style/partials/_variables.scss' as *;
.ms_btn {
        width:fit-content;
        padding: .4rem 3.5rem;
        border-radius: 8px;
        background-color: $primary-button-color;
        border:none;
        color: white;
        text-transform: capitalize;
        font-weight: bolder;
    }
</style>