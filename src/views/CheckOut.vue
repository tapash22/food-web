<template>
<v-container>
    <v-row class="d-flex justify-center ">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
            <v-card class="pa-0" elevation="1">
                <v-card-title class="text-body-1 pa-0 font-weight-bold mx-2 my-2 d-flex justify-start">E-Commerce</v-card-title>
                <v-divider></v-divider>
                <v-card-text class=" d-block">
                    <ProductCheckoutList :cart="cart" />

                </v-card-text>
            </v-card>
        </v-col>
        <!-- second part -->

        <v-col cols="12" md="4" sm="12" lg="4" xl="4" class="my-5">
            <v-card class="pa-2" elevation="1">
                <v-card-title class="text-body-1 font-weight-bold pa-0 my-2 mx-2 d-flex justify-start">Order Summery</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-0">
                    <v-list class="pa-0">

                        <v-list-item class="d-flex justify-space-between">
                            <v-list-item-title class="text-body-1">Subtotal: </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-end text-h6 font-weight-bold">$ {{totalPrice}}</v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item class="d-flex justify-space-between">
                            <v-list-item-title class="text-body-1">Delivery Fee: </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-end text-h6 font-weight-bold">$ {{delivery}}</v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item class="d-flex">
                            <v-text-field v-model="code" placeholder="Enter your code" class="shrink text-body-1 font-weight-bold w-100 text-h6" dense hide-details outlined />
                            <v-btn color="green lignten-1 mt-n1 text-h6" large>Apply Code</v-btn>
                        </v-list-item>

                        <v-list-item class="d-flex justify-space-between">
                            <v-list-item-title class="text-body-1 text-body-1 ">Vat:(5%) </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-end text-h6 font-weight-bold"> ${{vat}}</v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item class="d-flex green lighten-4 my-2">
                            <v-list-item-title class="text-h6 font-weight-bold text-end"> Total: $ {{totalSum}}</v-list-item-title>
                        </v-list-item>

                    </v-list>
                </v-card-text>
                <v-card-actions class="pa-0 my-2 d-flex justify-center my-2">
                    <router-link :to="{name:''}" class="text-decoration-none pa-0">
                        <v-btn text color="green lignten-5" width="100%" class="black--text font-weight-bold text-body-1">
                            Proceed to checkout
                        </v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import ProductCheckoutList from '@/components/ProductCheckoutList.vue';
import {
    mapGetters,
    mapState
} from 'vuex';

export default {

    data() {
        return {
            code: '',
            delivery: 10,
        }
    },
    computed: {
        ...mapState('cart', {
            cart: 'cart'
        }),
        ...mapGetters('cart', {
            totalPrice: 'cardTotalPrice'
        }),

        vat() {
            return this.totalPrice * (5 / 100);
        },

        voucher(){
            return this.getVoucher();
        },

        totalSum() {

            let total = this.totalPrice;
            let delivery = this.delivery;
            return total + delivery + (-this.voucher) + this.vat;
        }
    },

    components: {
        ProductCheckoutList,
    },

    methods: {

        getVoucher() {
            let voucher=0;
            if (this.code == "my") {
               return voucher = (10 / 100) * this.totalPrice;
            } else {
              return  voucher = 0
            }
           
        }
    }

}
</script>
