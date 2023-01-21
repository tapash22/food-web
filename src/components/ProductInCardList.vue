<template>
<v-card :key="food.id" height="120" class="d-flex justify-space-between">
    <v-card-text class="d-block">
        <v-img :src="food.image" width="120" height="80" class="pa-0 my-1rounded-lg" />
        <v-card-title class="pa-0 text-body-1 black--text">{{food.name}}</v-card-title>
    </v-card-text>
    <v-card-text class="pa-0">
        <v-card-title class="text-body-1 black--text d-flex justify-end ">Tk. {{food.price}}</v-card-title>
        <v-card-subtitle class="d-flex justify-end align-end subtitle">
            <v-avatar size="24" color="green lighten_1">
                <v-icon class="text-h5 font-weight-bold align-end " color="white" @click="addToCart">mdi-plus</v-icon>
            </v-avatar>
        </v-card-subtitle>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    name: 'product-in-card-list',
    props: ['food'],
    data(){
        return{
            count:1,
        }
    },

    methods: {
        addToCart() {
            let value = this.count;
            this.$store.dispatch("cart/addProductToCard", {

                product: this.food,
                quantity: value
            });
        },
    }
}
</script>
