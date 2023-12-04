<script>
export default {
    props: {
        menu: Object,
    }
}
</script>

<template>
    <header>
        <div class="container">

            <!-- navbar -->
            <nav class="d-flex justify-content-between align-items-center">
                <img src="../assets/img/dark-logo.png" alt="logo">

                <!-- menu items list: tramite props si itera su un array di oggetti che contengono gli items del menù della navbar -->
                <ul class="list-unstyled d-flex gap-5 m-0">
                    <li v-for="item in menu" :key="item" class="d-flex gap-1">
                        <a :href="item.href">{{ item.text }}</a>
                        <a href=""><i class="fa-solid fa-angle-down"></i></a>
                    </li>
                </ul>
                <!-- /menu items list -->

                <!-- social logo link list -->
                <ul class="list-unstyled d-flex gap-4 my-0">
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
                <!-- /social logo link list -->


            </nav>
            <!-- /navbar -->
        </div>

        <div class="ms_hero"></div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

header {
    background-color: $primary-background-color;
    background-image: url('../assets/img/background-pattern-wavify.png');
    /* debug */
    height: 600px;

    nav {
        height: 80px;

        img {
            width: 180px;
        }

        a {
            text-decoration: none;
            color: $secondary-header-color;

            .fa-angle-down {
                font-size: .7rem;
            }
        }
        .fa-brands {
            font-size: 1.2rem;
            color: $primary-header-color;
        }
    }
}
</style>