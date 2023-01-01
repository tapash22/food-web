<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center p-2" cols="12" lg="3" md="3" sm="6" v-for="resturent in resturents" :key="resturent.id">
        <Resturent :resturent="resturent"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Resturent from './Resturent.vue';

export default {
  name: 'restaurant-list',

  computed: {
    ...mapState('resturents', {
      resturents:'resturents'
    })
  },
  components: {
    Resturent
  },
}
</script>
