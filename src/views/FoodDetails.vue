<template>
    <div class="food-details">
        <v-container>
            <v-row class="my-5">
                <v-col cols="12" md="4" lg="4" xl="4" sm="12">
                    <v-sheet elevation="3" rounded="lg">
                        <v-img :src="item.image" />
                    </v-sheet>
                </v-col>
                <v-col cols="12" md="8" lg="8" xl="8" sm="12">
                    <v-card>
                        <v-card-title>
                            {{ item.name }}
                        </v-card-title>
                        <v-card-subtitle class="text-uppercase ">{{ item.category }}</v-card-subtitle>
                        <v-card-text class="pa-0">
                            <v-card-title class="red-text pa-0 mx-5">{{ item.price }}</v-card-title>
                            <v-card-subtitle class="mx-3 my-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti minus, inventore
                                quos, consequatur mollitia itaque atque, in magnam asperiores saepe distinctio animi
                                adipisci exercitationem tenetur! Molestiae sequi aliquid nemo blanditiis.
                            </v-card-subtitle>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="mx-5" @click="addToCart()">
                                add to card
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
    name: 'fooddetails',
    data() {
        return {
            id: this.$route.params.id,
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

    methods:{
            addToCart() {
            this.$store.dispatch("cart/addProductToCard", {
                product: this.item,
                quantity: 1
            });
        },
    }

}
</script>