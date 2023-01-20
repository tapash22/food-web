<template>
<div class="product-checkout-list">
    <template v-for="item in cart">
        <v-lsit class="pa-0 text my-3" :key="item.product.id" v-if="item">
            <v-img width="100" height="80" :src="item.product.image" class="image" />
            <div class="text1">
                <v-list-item class="d-block first w-100">
                    <v-list-item-title class="text-body-1 "> {{item.product.name}}</v-list-item-title>
                    <v-list-item-subtitle class="text-caption"> this is leather jacket with button</v-list-item-subtitle>
                    <v-list-item-title class="text-body-1 my-2"> {{item.product.category}}</v-list-item-title>
                </v-list-item>

                <v-list-item class="d-block w-50 second">
                    <v-list-item-title class="my-1">${{item.product.price}}</v-list-item-title>
                    <v-list-item-subtitle>20%</v-list-item-subtitle>
                    <v-btn color="green lighten-1" @click.prevent="removeProductFromCart(item.product)" icon>
                        <v-icon color="green">mdi-delete</v-icon>
                    </v-btn>
                </v-list-item>
                <v-list-item-action-text class="d-flex d-sm-flex d-md-block d-lg-block third w-75 my-2">
                    <v-icon @click="removeQuantity(item)" color="green" class="text-h6 font-weight-bold">mdi-minus</v-icon>
                    <span class="text-h6 font-wight-bold black--text mx-2 my-1">{{item.quantity}}</span>
                    <v-icon @click="addQuantity(item)" color="green" class="text-h6 font-weight-bold">mdi-plus</v-icon>
                </v-list-item-action-text>
            </div>

        </v-lsit>
    </template>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    name: 'product-checkout-list',
    props: ['cart'],
    data() {
        return {
            count: 1,
            item: null,
        }
    },
    computed: {

        ...mapGetters('cart', {
            cartItemCount: 'cartItemQuentity'
        }),
        // plus() {
        //     return this.countPlus;
        // },
        // minus() {
        //     return this.countMinus;
        // }
    },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product);
        },

        removeQuantity(item) {
            this.item = item;
            let value = this.item.quantity--;
            this.$store.dispatch("cart/removeQuantity", {
                quantity: value
            })
        },

        addQuantity(item) {
            this.item = item
            let value = this.item.quantity++;
            this.$store.dispatch("cart/addQuantity", {

                //  product: item,
                quantity: value
            });
        },

    }
}
</script>

<style scoped>
.text {
    display: grid;
    grid-template-columns: 120px 3fr;
    grid-gap: 5px;
}

.text .text1 {
    /* display: flex;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: 2fr 15% 15%;
}

/* .text .image {
    align-self: center;
    justify-self: center;
    padding: 0;
} */

.text .first {
    align-self: flex-start;
    justify-content: start;
}

.text .second {
    align-self: flex-start;
    justify-content: center;
}

.text .third {
    align-self: center;
    justify-content: flex-start;
}

@media only screen and (max-width: 600px) {
    .text {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 5px;
    }

    .text .text1 {
        display: grid;
        grid-template-columns: 1fr;

    }
}
</style>
