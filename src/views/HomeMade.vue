<template>
<v-container>
    <v-row>
        <v-col class="pa-0 my-2" cols="6" sm="6" lg="3" md="3" xl="3" v-for="item in homemadeList" :key="item.id">
            <FoodCard :item="item" />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {
    mapGetters,
    mapState
} from 'vuex';
import FoodCard from '@/components/FoodCard.vue';
export default {
    name: 'homemade',
    computed: {
        ...mapGetters('products', {
            homemadeList: 'homemadeList'
        }),
    },
    components: {
        FoodCard
    },

    mounted() {
        window.scrollTo(0, 0);
    },
}
</script>
