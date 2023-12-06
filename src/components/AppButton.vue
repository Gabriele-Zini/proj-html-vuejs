<script>
export default {
    data() {
        return {

        }

    },
    props: {
        buttonText: String,
        isArrow: Boolean,
        href:String,
    }
}
</script>

<template>
    <a :href="href" class="ms_btn">{{ buttonText }} <i v-show="isArrow" class="fa-solid fa-arrow-right ms-2"></i></a>
</template>

<style lang="scss" scoped>
@use '../style/partials/_variables.scss' as *;
.ms_btn {
        width:fit-content;
        padding: .6rem 3.5rem;
        border-radius: 8px;
        background-color: $primary-button-color;
        border:none;
        color: white;
        text-transform: capitalize;
        font-weight: bolder;
        text-decoration: none;

        &:hover {
            background-color:$button-hover;
        }
    }
</style>