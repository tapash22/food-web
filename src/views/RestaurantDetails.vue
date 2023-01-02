<template>
    <div class="resturent-details">
        <h2 class="text-center my-2 text-h6">Resturent Details</h2>
        <v-row class="d-flex justify-center my-2">
            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                <v-img :src="resturent.image" />
                <v-rating value="4" dense color="red" class="my-2" />
                <v-sheet elevation="1" rounded="lg" class="d-flex justify-space-between">
                    <h2 class="text-h6 mx-2 my-8">Address:</h2>
                    <p class="text-body-1 pa-3 text-justify address">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iure eligendi cupiditate.
                        ut saepe libero

                    </p>
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card>
                    <v-card-title>{{ resturent.name }}</v-card-title>
                    <v-card-subtitle class="text-uppercase">resturent food list</v-card-subtitle>
                    <v-card-text>
                        <Carousel />
         
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from '@/components/Carousel.vue'
export default {
    name: 'resturent-details',
    data() {
        return {
            id: this.$route.params.id,
            r_foods: [
                {
                    id: 1,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient',]
                },
                {
                    id: 2,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient',]
                },
                {
                    id: 3,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient',]
                },
                {
                    id: 4,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient',]
                },
                {
                    id: 5,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient',]
                },
                {
                    id: 6,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient',]
                },
            ]
        }
    },
    computed: {
        resturent() {
            return this.getResturentById(this.id);
        },
        ...mapGetters('resturents', {
            getResturentById: 'getResturentById'
        })
    },

    components: {
        Carousel
    }

}
</script>

<style scoped>
.body-card {
    height: 400px;
}
</style>
