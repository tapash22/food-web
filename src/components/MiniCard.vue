<template>
<v-card class="mx-0 " width="200px">
    <v-card-text class=" d-flex justify-space-between">
        <v-card-title class="d-flex justify-start text-body-1 pa-0 font-weight-bold ">Order</v-card-title>
        <v-btn color="green" small text class="text-body-2 black--text" @click.prevent="clearCardItem()">
            clear
        </v-btn>
    </v-card-text>
    <v-divider ></v-divider>

    <v-card-text class="pa-0">
        <v-list class="mx-2 pa-0">
            <v-list-item v-for="item in cart" :key="item.product.id" class="pa-0">
                <v-list-item-content>
                    <v-list-item-title>{{ item.product.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.quantity + 'X' + item.product.price }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <a @click.prevent="removeProductFromCart(item.product)">
                        <v-icon color="red lighten-1">mdi-delete</v-icon>
                    </a>
                </v-list-item-action>
              
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="d-flex justify-center pa-0 " >
                <v-list-item-title class="text-body-1 pa-0 mx-1" >Total: Tk.{{ cardTotalPrice }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
    </v-card-text>

    <v-card-actions class="pa-0 my-2 d-flex justify-center">
        <CheckOutLink />
    </v-card-actions>
</v-card>
</template>

<script>
import CheckOutLink from '@/components/CheckOutLink.vue';

import {
    mapGetters,
    mapState
} from 'vuex'
export default {
    name: 'mini-cart',

    computed: {
        ...mapState('cart', {
            cart: 'cart'
        }),

        ...mapGetters('cart', {
            cardTotalPrice: 'cardTotalPrice'
        }),
    },

    components:{
        CheckOutLink,
    },

    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('cart/removeProductFromCart', product);
        },

        clearCardItem() {
            this.$store.dispatch('cart/clearCardItem');
        },
    }
}
</script>
