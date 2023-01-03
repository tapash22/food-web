<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { TheNavigation },

  methods: {

  }
};
</script>
