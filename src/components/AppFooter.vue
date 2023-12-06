<script>
import AppSocialLogos from './AppSocialLogos.vue';
export default {
    data() {
        return {
            style: {
                fontSize: "1.5rem",
            },
        }
    },
    components: {
        AppSocialLogos,
    },


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
                    <AppSocialLogos :style="style" :hasPrimary="hasPrimary" />
                </div>


                <div class="d-flex gap-5">
                    <div>
                        <h4 class="text-white fw-bold">Explore</h4>
                        <ul class="list-unstyled d-flex flex-column flex-wrap ms_list">
                            <li><a href="">Start Here</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Success story</a></li>
                            <li><a href="">Courses</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white fw-bold">Information</h4>
                        <ul class="list-unstyled">
                            <li><a href="">Membership</a></li>
                            <li><a href="">Purchase Guide</a></li>
                            <li><a href="">rivacy Policy</a></li>
                            <li><a href="">Start here</a></li>
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
        padding-left: 5rem;


        a {
            color: $primary-footer-color;
        }
    }

    h4 {
        margin-left: 5rem;
    }

    .ms_list {
        max-height: 150px;
    }

    ul {
        line-height: 2.5rem;

        a {
            
            text-decoration: none;
        }
    }

    .ms_rights {
        margin-top: 100px;
    }


}
</style>