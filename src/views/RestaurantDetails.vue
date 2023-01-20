<template>
<div class="resturent-details">
    <v-row class="d-flex justify-space-between">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="pa-0">
            <v-card class="pa-0">
                <v-img height="200" class="my-2" :src="resturent.image" />

                <v-card-title class="d-flex justify-space-between">
                    <span class="text-body-1 font-weight-bold align-center">{{resturent.name }}</span>
                    <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="text-body-2 " color="green" text v-bind="attrs" v-on="on">
                                Review & comments
                            </v-btn>
                        </template>
                        <ResturentDetailDialog :resturent="resturent" />
                    </v-dialog>
                </v-card-title>

                <v-card-subtitle>
                    <v-icon color="green" class="text-h6 mx-2"> mdi-map-marker-outline</v-icon><span class="text-body-2">House:40, Road:01, Block:#E, Bonosree, Rampura, Dhaka</span>
                </v-card-subtitle>

                <v-card-text>

                    <TabDetails :tab_n="cards" :tab_b="tablistss" :tab_m="tabs" />
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="card">
            <BillDetail :delivery="delivery" :foods="foods" name="Resturent" />
        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import ResturentDetailDialog from '@/components/ResturentDetailDialog.vue';
import TabDetails from '@/components/TabDetails.vue';
import BillDetail from '@/components/BillDetail.vue';

export default {
    name: 'resturent-details',
    data() {
        return {

            id: this.$route.params.id,
            tabs: null,
            value: 0,
            dialog: false,
            delivery: '30min',
            tablistss: [{
                    id: 1,
                    name: 'Chicken',
                    text: 'Chicken',
                    r_foods: [{
                            id: 1,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 2,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 3,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 4,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 5,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 6,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'Snakes',
                    text: 'Snakes',
                    r_foods: [{
                            id: 1,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 2,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 3,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 4,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 5,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 6,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                    ],
                },
                {
                    id: 3,
                    name: 'Vegetable',
                    text: 'Vegetable',
                    r_foods: [{
                            id: 1,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 2,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 3,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 4,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 5,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 6,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                    ],
                },
                {
                    id: 4,
                    name: 'Starters',
                    text: 'Starters',
                    r_foods: [{
                            id: 1,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 2,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 3,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 4,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 5,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                        {
                            id: 6,
                            name: 'Fried Rice',
                            image: 'https://assets.tendercuts.in/product/M/R/5487a287-ec1b-47a0-85bf-8e0f97e77349.webp',
                            price: 34,
                            rating: 3.5,
                            details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                        },
                    ],
                },
            ],

            cards: ['Chicken', 'Snakes', 'Vegetable', 'Starters'],

            foods: [{
                    id: 1,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                },
                {
                    id: 2,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                },
                {
                    id: 3,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                },
                {
                    id: 4,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                },
                {
                    id: 5,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                },
            ],

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
        TabDetails,
        ResturentDetailDialog,
        BillDetail
    },

}
</script>

<style scoped>
.body-card {
    height: 400px;
}

.resturent-details {
    height: 100vh;
}

.v-list-item {
    min-height: 40px !important;
}

.card {
    position: relative;
    right: 0;
    width: 30%;
}

@media only screen and (max-width: 600px) {
    .card {
        position: relative;
        width: 100%;
        height: 50%;
    }

    .c_text {
        overflow: scroll;
    }
}
</style>
