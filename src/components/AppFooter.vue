<script>
import AppSocialLogos from './AppSocialLogos.vue';
import { store } from '../store'
export default {
    data() {
        return {
            store,
            style: {
                fontSize: "1.5rem",
            },
        }
    },
    components: {
        AppSocialLogos,
    },
    props: {
        menu: Object,
    }


}
</script>

<template>
    <footer>


        <div class="container-md">
            <div class="d-flex justify-content-between">


                <div class="d-flex flex-column">
                    <div>
                        <h4 class="text-white ms-0 mb-4 fw-bold">Address</h4>
                        <p>382 NE 191st Miami, FL 67859-99324</p>
                        <p>382 NE 191st Miami, (9am-17pm)</p>
                        <p>support@maxcoach.com</p>
                    </div>
                    <AppSocialLogos :style="style" />
                </div>


                <div class="d-flex">
                    <div>
                        <h4 class="text-white fw-bold">Explore</h4>
                        <ul class="list-unstyled d-flex flex-column flex-wrap ms_list" >
                            <li v-for="item in menu.explore"><a :href="item.href">{{ item.text }}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white fw-bold">Information</h4>
                        <ul class="list-unstyled" >
                            <li v-for="item in menu.information"><a :href="item.href">{{ item.text }}</a></li>

                        </ul>
                    </div>
                </div>



            </div>
            <p class="text-center ms_rights"><span class="fs-4">&reg;</span> 2020 MaxCoach. All rights Reserved</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

footer {
    /* debug */
    background-color: $primary-footer-bg-color;
    padding: 5rem 0;
    color: $primary-footer-color;


    li {
        padding-right: 5rem;


        a {
            color: $primary-footer-color;

        }
    }

   

    .ms_list {
        max-height: 150px;
    }

    ul {
        line-height: 2.5rem;




        a {

            text-decoration: none;

            &:hover {
                color: white;
            }
        }
    }

    .ms_rights {
        margin-top: 100px;
    }


}
</style>