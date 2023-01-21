<template>
<div class="tab-details">
    <template class="head">
        <v-tabs v-model="tab_m" centered>
            <v-tab v-for="card in tab_n" :key="card" class="text-body-1 green--text">
                {{card}}
            </v-tab>
        </v-tabs>
    </template>

    <v-tabs-items v-model="tab_m">
        <v-tab-item class="text-center my-5" v-for="tabList in tab_b" :key="tabList">
            <v-list>
                <v-list-item-title class="text-center my-5 text-uppercase">{{tabList.text}}</v-list-item-title>
                <v-list-item v-if="tabList.r_foods" class="list-item">
                    <template v-for="food in tabList.r_foods">
                        <ProductInCardList :food="food" :key="food.id"/>
                    </template>
                </v-list-item>
            </v-list>

        </v-tab-item>
    </v-tabs-items>
</div>
</template>

<script>
import ProductInCardList from '@/components/ProductInCardList.vue';

export default {
    name: 'tab-details',
    props: [
        'tab_n', 'tab_b', 'tab_m'
    ],
    data(){
        return{
            count: 1,
        }
    },

    components:{
        ProductInCardList
    },
    
    methods: {
        addToCart() {
            console.log('hi')
            // let value = this.count;
            // this.$store.dispatch("cart/addProductToCard", {

            //     product: this.item,
            //     quantity: value
            // });
        },
    }
}
</script>

<style scoped>
.head {
    display: flex;
    justify-content: center;
}

.list-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 120px);
    grid-gap: 1em;
}

.subtitle {
    height: 70px;
}

@media only screen and (max-width: 600px) {
    .list-item {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(120px);
        grid-gap: 1em;
    }
}
</style>
