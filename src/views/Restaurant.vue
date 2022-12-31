<template>
  <v-container>
    <v-row >
      <v-col class="d-flex justify-center p-2" cols="12" lg="3" md="3" sm="6" v-for="item in items" :key="item.id">
        <v-card>
          <img src="../assets/logo.png"/>
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-subtitle ><a :href="item.link">Details</a></v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

  export default {
    name: 'restaurant',
    data(){
   return{
    
   }
    },
    computed:{
      ...mapState({
        items : (state) => state.restaurentm.items
      })
    },
    components: {
      
    },
  }
</script>
