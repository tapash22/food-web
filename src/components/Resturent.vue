<template>
<div class="resturent">
    <router-link :to="{ name: 'restaurantdetails', params: { id: resturent.id } }" class="text-decoration-none">
        <v-card class=" mx-1">
            <v-img width="400" height="300"  :src="resturent.image">
                <v-card-title class="d-flex justify-space-between pa-0">
                    <v-chip color="green lighten-1" class="white--text text-body-1 mx-2 my-2">promo</v-chip>
                    <v-chip pill  color="white" class="black--text text-body-2 font-weight-bold">35min</v-chip>
                </v-card-title>
            </v-img>
            <v-card-text class=" pa-0">
                <v-card-title class="pa-0 text-body-1 mx-2 black--text font-weight-bold my-2">
                    {{ resturent.name}}
                </v-card-title> 
                <v-rating size="14" color="green" class="mx-2 pa-0" dense :value="value" />
                <v-card-subtitle class="text-body-2   green--text">TK 30 Delivery Fee</v-card-subtitle>
            </v-card-text>
        </v-card>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'resturent',
    props: ['resturent'],
    data(){
        return{
            value:4
        }
    }
}
</script>

<style scoped>
.resturent{
    display: flex;
    justify-content: center;
}

</style>
