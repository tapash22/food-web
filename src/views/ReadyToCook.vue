<template>
  <v-container>
    <v-row>
      <v-col class="pa-0 my-2" cols="6" sm="6" lg="3" md="3" xl="3" v-for="item in readycoockList" :key="item.id">
        <FoodCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import FoodCard from '@/components/FoodCard.vue';

export default {
  name: 'readytocook',

  computed: {
    ...mapGetters('products',{
      readycoockList:'readycoockList'
    }),
  },
  components: {
    FoodCard,
  },
}
</script>
