<template>
<div class="food-card">
    <router-link :to="{ name:'fooddetails' ,params:{id:item.id}}" class="text-decoration-none">
        <v-card class="pa-2 mx-1">
            <v-img class="background-size-cover v-responsive_content" :src="item.image">
            </v-img>
            <v-card-text class=" d-block pa-0 ma-0">
                <v-card-title class="black--text text-body-1 font-weight-bold">{{ name}}</v-card-title>
                <v-card-subtitle class="d-block">
                    <v-rating dense half-icon :value="value" color="green" size="14" />
                    <span class="black--text pa-0 text-right my-5 text-body-1">
                        Tk.{{ item.price}}
                    </span>

                </v-card-subtitle>
            </v-card-text>
        </v-card>
    </router-link>

</div>
</template>

<script>
export default {
    name: 'food-card',
    props: ['item'],
    data() {
        return {
            value: 4.5,
        }
    },

    computed: {
        name() {
            let first = this.item.name[0].toUpperCase();
            let rest = this.item.name.slice(1).toLowerCase();
            return first + rest;
        }
    }

}
</script>
