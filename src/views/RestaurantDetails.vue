<template>
    <div class="resturent-details">
        <h2 class="text-center my-2 text-h6">Resturent Details</h2>
        <v-row class="d-flex justify-center my-2">
            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                <v-img :src="resturent.image" />
                <v-rating value="4" dense color="red" class="my-2" />
                <v-sheet elevation="1" rounded="lg" class="d-flex justify-space-between">
                    <h2 class="text-h6 mx-2 my-8">Address:</h2>
                    <p class="text-body-1 pa-3 text-justify address">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iure eligendi cupiditate.
                        Eos
                        ut saepe libero corporis, iusto natus aspernatur ex reprehenderit hic recusandae aperiam porro
                        iste ad suscipit!
                    </p>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card>
                    <v-card-title>{{ resturent.name }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'resturent-details',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        resturent() {
            return this.getResturentById(this.id);
        },
        ...mapGetters('resturents', {
            getResturentById: 'getResturentById'
        })
    }

}
</script>
