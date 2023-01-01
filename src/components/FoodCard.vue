<template>
    <div class="food-card">
        <router-link :to="{ name:'fooddetails' ,params:{id:item.id}}" class="text-decoration-none">
            <v-card>
                <v-img height="200px" width="250" class="background-cover background-center"
                    :src="item.image">
                    <v-card-text class="pink lighten-2 d-block pa-0 ma-0">
                        <v-card-title class="black--text text-caption text-left " color="info">{{ item.name}}</v-card-title>
                        <v-card-subtitle class="white--text h-50 pa-0 text-right mx-2 text-body-1">{{ item.price
                            }}</v-card-subtitle>
                    </v-card-text>

                </v-img>
            </v-card>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'food-card',
    props: ['item'],
    
}
</script>