<template>
    <div class="resturent-food">
        <router-link :to="{name:'resturentfooddetails', params:{id:list.id}}" class="text-decoration-none">
            <v-card>
                <v-img width="180" height="100%" :src="list.image" />
                <v-card-text class="pa-0">
                    <v-card-title class="pa-0 text-body-2 my-2 mx-2 red--text text-uppercase">
                        {{ list.name }}
                    </v-card-title>
                    <v-rating size="18" color="red" :value="list.rating" dense />
                    <v-card-subtitle class="text-body-1 d-flex justify-end">Tk.{{ list.price }}</v-card-subtitle>
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                    <v-btn class="d-block w-100 white--text" color="#d83010 ">Add to card</v-btn>
                </v-card-actions>
            </v-card>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'resturent-food',
    props: ['list']
}
</script>