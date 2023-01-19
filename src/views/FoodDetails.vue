<template>
<div class="food-details">
    <v-row>
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
            <div class="card">
                <div class="image">
                    <v-img class="img" :src="item.image" />
                </div>
                <div class="details">
                    <v-list color="pa-4" elevation="2">
                        <v-list-item-title class="text-body-1 font-weight-bold ">{{item.name}}</v-list-item-title>
                        <v-rating dense size="14" :value="value" color="green" />
                        <v-list-item-title class="text-body-1 my-5 mx-5">Add </v-list-item-title>
                        <v-list-item class="my-5">
                            <v-chip-group multiple column active-class="green lignten-1 white--text">
                                <v-chip v-for="tag in ingridients" :key="tag" @click="activeChip(tag)">
                                    {{ tag }}
                                </v-chip>
                            </v-chip-group>
                            <!-- <v-chip active-class="red" color="gray" class="text-body-2 font-weight-medium d-flex justify-center my-1" pill v-for="item in ingridients" :key="item">{{item}}</v-chip> -->
                        </v-list-item>
                        <v-list-item class="d-block">
                            <v-list-item-title class="text-body-2 font-weight-bold my-2 ">Tk.{{item.price}}</v-list-item-title>
                            <v-sheet class="pa-1 my-4 " elevation="0">
                                <v-icon color="red" class="text-h6" @click="countMinus">mdi-minus</v-icon>
                                <span class="mx-2 text-body-1">{{count}}</span>
                                <v-icon color="red" class="text-h6" @click="countPlus">mdi-plus</v-icon>
                            </v-sheet>
                        </v-list-item>
                        <v-list-item class="d-block">
                            <v-list-item-title class="text-body-1 font-weight-bold">Details:</v-list-item-title>
                            <p class="mx-2 text-body-2 text-justify my-2 green lighten-5 pa-3 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi praesentium dignissimos vero. Cumque, officia. Ratione officiis veniam minus quam sequi minima possimus qui vero laborum! Recusandae eveniet et ab fuga eaque facere dolorum adipisci tempora sed, consequuntur id odio reprehenderit!</p>
                        </v-list-item>

                        <v-list-item-action class="d-flex justif-start">
                            <v-btn color="green" small @click="addToCart">Add To Card</v-btn>
                        </v-list-item-action>
                    </v-list>
                </div>
            </div>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
            <BillDetail :delivery="delivery" :foods="foodss" name="Grosarry" />
        </v-col>

    </v-row>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex';
import BillDetail from '@/components/BillDetail.vue';

export default {
    name: 'fooddetails',
    data() {
        return {
            value: 4,

            id: this.$route.params.id,
            count: 1,
            delivery: '30min',
            foodss: [{
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
            ingridients: ['poteto', 'capsicum', 'garlic', 'onion', 'vineger', 'cheese', 'latus', ]
        }
    },

    computed: {
        item() {
            return this.getProductById(this.id);
        },
        ...mapGetters('products', {
            getProductById: 'getProductById',

        })
    },

    components: {
        BillDetail,
    },

    methods: {
        addToCart() {
            let value = this.count;
            this.$store.dispatch("cart/addProductToCard", {

                product: this.item,
                quantity: value
            });
        },
        countPlus() {
            this.count += 1;
        },
         countMinus() {
            if (this.count == 1) {
                this.count= 0;
            }else{
                this.count -= 1;
            }
        },

        activeChip(data) {
            console.log(data);
        }

    }

}
</script>

<style scoped>
.card {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 5px;
}

.card .image {
    width: 100%;
    height: 250px;

}

.card .image .img {

    height: 100%;
    background-position: center;
    background-size: cover;
}

.card .details {
    display: block;
    width: 100%;
    height: 100%;
}

@media only screen and (max-width: 600px) {
    .card {
        display: flex;
        flex-direction: column;
    }

    .card .image {
        width: 100%;
        height: 250px;
    }

    .card .image .img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }

}
</style>
