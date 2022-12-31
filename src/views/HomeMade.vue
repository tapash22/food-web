<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center p-2" cols="12" lg="3" md="3" sm="6" v-for="item in items" :key="item.id">
        <FoodCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import FoodCard from '@/components/FoodCard.vue';
export default {
  name: 'homemade',
  computed: {
    ...mapState({
      items: (state) => state.homem.foods
    })
  },
  components: {
    FoodCard
  },
}
</script>
