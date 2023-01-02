<template>
    <div class="resturent-food-details">
        <v-row class="d-md-flex d-lg-flex d-sm-block d-block justify-center my-5">
            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                <v-img
                    :src="foodDetails.image"></v-img>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card>
                    <v-card-title class="text-body-2 text-uppercase red--text my-2">
                        {{foodDetails.name}}
                    </v-card-title>
                    <v-card-subtitle class="text-body-1">Price: {{foodDetails.price}}</v-card-subtitle>

                    <v-card-text class="pa-0">
                        <p class="pa-2 mx-2 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo modi animi ad quisquam
                            accusantium at ipsam, fuga delectus facere repellendus molestiae quia incidunt tempora
                            eligendi architecto voluptatem harum nihil nisi!</p>
                    </v-card-text>
                    <v-card-actions class=" ">
                        <v-btn class="w-25">
                            Add to card
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'resturent-food-details',
    data() {
        return {
            id:this.$route.params.id
        }
    },

    computed:{
        foodDetails(){
            return this.getResturentFoodById(this.id);
        },
        ...mapGetters('resturents',{
            getResturentFoodById:'getResturentFoodById'
        })
    }
}
</script>