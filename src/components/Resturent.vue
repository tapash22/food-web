<template>
    <div class="resturent">
        <router-link :to="{ name: 'restaurantdetails', params: { id: resturent.id } }" class="text-decoration-none">
            <v-card>
                <v-img width="250" height="200" :src="resturent.image">
                    <v-card-title class="d-flex justify-end red--text  lighten-1 pa-1 text-body-2">
                        <v-chip color="red" class="white--text text-body-1">promo</v-chip> </v-card-title>
                    <v-card-text class="red lighten-2 pa-0 ma-0 card-text">
                        <v-card-title class="pa-0 text-body-1 mx-2 text-uppercase my-2">{{ resturent.name
                            }}</v-card-title>
                    </v-card-text>
                </v-img>
            </v-card>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'resturent',
    props: ['resturent']
}
</script>

<style scoped>
.card-text {
    position: absolute;
    bottom: 0;
}
</style>