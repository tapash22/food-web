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
                    <!-- <template>
                        <v-tabs v-model="tabs" centered>
                            <v-tab v-for="n in 2" :key="n">
                                Item {{ n }}
                            </v-tab>
                        </v-tabs>
                    </template>

                    <v-tabs-items v-model="tabs">
                        <v-tab-item>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem accusantium doloremque nobis consequatur amet voluptatum dolorum nihil aliquam, in dignissimos et id consectetur, aperiam reiciendis? Numquam reprehenderit in nobis.

                        </v-tab-item>
                        <v-tab-item>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at optio officiis ad assumenda deserunt ex excepturi ullam a repellendus unde ipsum quam nam fuga blanditiis nihil voluptatibus nemo illo, vero perspiciatis adipisci libero dignissimos dolorum et? Expedita, nemo dolorum.

                        </v-tab-item>
                    </v-tabs-items> -->
                    <TabDetails :tab_n="cards" :tab_b="tablistss" :tab_m="tabs" />
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
            <v-card class="pa-0 card ">
                <v-icon color="gray" class="text-h5 d-flex justify-center pt-4">
                    mdi-moped-outline
                </v-icon>
                <span class="text-body-2  d-flex justify-center">30min</span>
                <v-card-title class="text-body-1 font-weight-bold d-flex justify-center ">Your Order from {{resturent.name }}</v-card-title>
                <v-card-text class="pa-0 d-block c_text">
                    <v-list class="pa-0 " v-for="foods in foods" :key="foods.id" outlined>
                        <v-list-item class=" d-flex justify-space-between">
                            <v-list-item-title>{{foods.name}}</v-list-item-title>
                            <v-list-item-subtitle class="text-end">Tk. {{foods.price}}</v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item class="d-flex justify-end">
                            <v-icon color="red">mdi-delete</v-icon>
                            <span class="mx-2 text-body-1 font-weight-bold">{{value}}</span>
                            <v-icon @click="incrementValue" color="green">mdi-plus</v-icon>
                        </v-list-item>

                    </v-list>
                </v-card-text>
                <v-card-text class="pa-0 ">
                    <v-list class="pa-0">
                        <v-list-item class="d-flex justify-space-between" v-for="total in totals" :key="total.id">
                            <v-list-item-title>{{total.name}}</v-list-item-title>
                            <v-list-item-subtitle class="text-end">Tk. {{total.price}}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import Carousel from '@/components/Carousel.vue'
import ResturentDetailDialog from '@/components/ResturentDetailDialog.vue';
import TabDetails from '@/components/TabDetails.vue';

export default {
    name: 'resturent-details',
    data() {
        return {

            id: this.$route.params.id,
            tabs: null,
            value: 0,
            dialog: false,
            totals: [{
                    id: 1,
                    name: 'Subtotal',
                    price: 22
                },
                {
                    id: 2,
                    name: 'Delivery fee',
                    price: 20
                },
                {
                    id: 3,
                    name: 'Platform fee',
                    price: 3
                },
                {
                    id: 4,
                    name: 'vat',
                    price: 5
                },
                {
                    id: 5,
                    name: 'Total',
                    price: 50
                }
            ],

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

            r_foods: [{
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
                {
                    id: 6,
                    name: 'Fried Rice',
                    image: '',
                    price: 34,
                    rating: 3.5,
                    details: ['ingredient', 'ingredient', 'ingredient', 'ingredient', ]
                },
            ],

            tablistss: [{
                    id: 1,
                    name: 'Chicken',
                    text: 'no Chicken  yet'
                },
                {
                    id: 2,
                    name: 'Snakes',
                    text: 'no Snakes yet'
                },
                {
                    id: 3,
                    name: 'Vegetable',
                    text: 'no Vegetable  yet'
                },
                {
                    id: 4,
                    name: 'Starters',
                    text: 'no Starters yet'
                },
            ],

            cards: ['Chicken', 'Snakes','Vegetable','Starters'],
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
        Carousel,
        ResturentDetailDialog,

    },

    methods: {
        incrementValue() {
            this.value += 1;
        }
    }

}
</script>

<style scoped>
.body-card {
    height: 400px;
}

.v-list-item {
    min-height: 40px !important;
}

.card {
    position: fixed;
    width: 30%;
    height: 100%;
}

.card .c_text {
    height: 200px;
    overflow: scroll;
}

@media only screen and (max-width: 600px) {
    .card {
        position: static;
        width: 100%;
        height: 50%;
    }

    .c_text {
        overflow: scroll;
    }
}
</style>
