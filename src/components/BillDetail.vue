<template>
<v-card class="pa-0 card2">
    <v-icon color="green" class="text-h3 icon bounceInLeft font-weight-bold d-flex justify-center pt-4">
        mdi-moped-outline
    </v-icon>
    <span class="text-body-1 font-weight-bold  d-flex justify-center">{{delivery}}</span>
    <v-card-title class="text-h6 font-weight-bold d-flex justify-center ">Your Order from {{name}}</v-card-title>
    <v-card-text class="pa-0 d-block c_text">
        <v-list class="pa-0 " v-for="foods in foods" :key="foods.id" outlined>
            <v-list-item class=" d-flex justify-space-between">
                <v-list-item-title>{{foods.name}}</v-list-item-title>
                <v-list-item-subtitle class="text-end">Tk. {{foods.price}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="d-flex justify-end">
                <v-icon @click="countMinus" color="red" class="text-h6">mdi-minus</v-icon>
                <span class="mx-2 text-body-1 black--text">{{count}}</span>
                <v-icon @click="countPlus" color="red" class="text-h6">mdi-plus</v-icon>
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
            count: 1,
        }
    },

    methods: {
        countPlus() {
            this.count += 1;
        },
        countMinus() {
            if (this.count == 1) {
                this.count = 0;
            } else {
                this.count -= 1;
            }
        },
    }
}
</script>

<style scoped>
.icon {
     animation-duration: 3s; 
}

.bounceInLeft {
    animation-name: bounceInLeft;
}

.card2 {
    position: relative;
    height: 700px;
    margin: 10px;
}

.card2 .c_text {
    height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
}



@keyframes bounceInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    60% {
        opacity: 1;
        transform: translateX(30px);
    }

    80% {
        opacity: 0.8;
        transform: translateX(-20px);
    }

    100% {
        transform: translateX(0);
        color: rgb(51, 206, 51);
    }
}
</style>
