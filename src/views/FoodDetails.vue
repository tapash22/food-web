<template>
    <div class="food-details">
        <v-container>
            <v-row>
                <v-col cols="12" md="4" lg="4" xl="4" sm="12">
                    <v-sheet elevation="3" rounded="lg">
                        <v-img :src="item.image"/>
                    </v-sheet>
                </v-col>
                <v-col cols="12" md="8" lg="8" xl="8" sm="12">
                    <v-card>
                        <v-card-title>
                            {{ item.name }}
                        </v-card-title>
                        <v-card-subtitle>{{ item.subcategory }}</v-card-subtitle>
                        <v-card-text class="pa-0">
                            <v-card-title>{{ item.price }}</v-card-title>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
    name: 'fooddetails',
    data() {
        return {
            id: this.$route.params.id,
            // item: ''
        }
    },

    // mounted() {
    //     this.item = this.itemById(this.id);
    // },

    computed: {
        item(){
            return this.itemById(this.id)
        },
        ...mapGetters({
            itemById: 'drym/getTodoById'
        })
    },

}
</script>