<script>
export default {
    data() {
        return {

        }
    },
    props: {
        style: Object,
        hasPrimary: Boolean,
    }
}
</script>

<template>
    <!-- social logo link list -->
    <ul class="list-unstyled d-flex gap-4 my-0">
        <li><a :style="style" :class="{ 'primary-logos-color': hasPrimary }" class="secondary-logos-color" href=""><i
                    class="fa-brands fa-twitter"></i></a></li>
        <li><a :style="style" :class="{ 'primary-logos-color': hasPrimary }" class="secondary-logos-color" href=""><i
                    class="fa-brands fa-facebook-f"></i></a></li>
        <li><a :style="style" :class="{ 'primary-logos-color': hasPrimary }" class="secondary-logos-color" href=""><i
                    class="fa-brands fa-instagram"></i></a></li>
        <li><a :style="style" :class="{ 'primary-logos-color': hasPrimary }" class="secondary-logos-color" href=""><i
                    class="fa-brands fa-linkedin"></i></a></li>
    </ul>
    <!-- /social logo link list -->
</template>

<style lang="scss" scoped>
@use '../style/partials/_variables.scss' as *;

.secondary-logos-color {
    color: $primary-footer-color;
}

.primary-logos-color {
    text-decoration: none;
    color: $primary-logos-color;

}
</style>