<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center p-2" cols="12" lg="3" md="3" sm="6" v-for="item in readycoockList" :key="item.id">
        <FoodCard :item="item" />
        <!-- <h2>{{ newList }}</h2> -->
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
