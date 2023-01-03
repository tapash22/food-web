<template>
    <v-card class="mx-0" width="250px">
        <v-card-text >
            <v-list class="pa-0">
                <v-list-item v-for="item in cart" :key="item.product.id" class="pa-0">
                    <v-list-item-content >
                        <v-list-item-title>{{ item.product.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.quantity + 'X' + item.product.price }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <a @click.prevent="removeProductFromCart(item.product)">
                            <v-icon color="grey lighten-1">mdi-delete</v-icon>
                        </a>

                    </v-list-item-action>
                    <hr />
                </v-list-item>
                <v-list-item class="d-flex justify-space-between">
                    <v-list-item-title>total: ${{ cardTotalPrice }}</v-list-item-title>

                    <v-btn color="primary " text @click.prevent="clearCardItem()">
                        clear
                    </v-btn>

                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions class="d-block  w-100 pa-0">
            <router-link :to="{ name: 'checkout' }" class="text-decoration-none">
                <v-btn small color="info" dark width="100%" class="w-100">
                    Checkout
                </v-btn>
            </router-link>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'mini-cart',
    computed: {
        ...mapState('cart', {
            cart: 'cart'
        }),

        ...mapGetters('cart', {
            cardTotalPrice: 'cardTotalPrice'
        })
    },

    mounted() {
        this.$store.dispatch('getCartItem');
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
