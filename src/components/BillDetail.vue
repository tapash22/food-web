<template>
<v-card class="pa-0 card2">
    <v-icon color="gray" class="text-h5 d-flex justify-center pt-4">
        mdi-moped-outline
    </v-icon>
    <span class="text-body-2  d-flex justify-center">{{delivery}}</span>
    <v-card-title class="text-body-1 font-weight-bold d-flex justify-center ">Your Order from {{name}}</v-card-title>
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
    <v-card-text class="pa-0">
        <v-list class="pa-0">
            <v-list-item class="d-flex justify-space-between" v-for="total in totals" :key="total.id">
                <v-list-item-title>{{total.name}}</v-list-item-title>
                <v-list-item-subtitle class="text-end">Tk. {{total.price}}</v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    name: 'bill-detail',
    props: ['foods', 'name', 'delivery'],
    data() {
        return {
            value: 0,
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
        }
    },

    methods: {
        incrementValue() {
            this.value += 1;
        }
    }
}
</script>

<style scoped>
.card2 {
    position: relative;
    height: 600px;
    margin: 10px;
}

.card2 .c_text {
    height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>
