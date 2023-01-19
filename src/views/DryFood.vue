<template>
  <v-container>
    <v-row>
      <v-col class="pa-0 my-2" cols="6" sm="6" lg="3" md="3" xl="3" v-for="item in dryfoodList"
        :key="item.id">
        <FoodCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import FoodCard from '@/components/FoodCard.vue';

export default {
  name: 'dryfood',
  computed: {
    ...mapGetters('products', {
      dryfoodList: 'dryfoodList'
    }),
  },
  components: {
    FoodCard
  },
}
</script>
