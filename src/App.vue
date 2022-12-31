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
import { Cometchat } from '@cometchat-pro/chat'

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { TheNavigation },

  created() {
    this.initializeComet();
  },

  methods: {
    initializeComet() {
      const APP_ID = '2244901bb4aef3c0';
      const REGION = 'us';
      const appSetting = new Cometchat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(REGION)
        .build();

      Cometchat.init(APP_ID, appSetting).then(
        () => {
          console.log('initialize app');
        },
        (error) => {
          console.log('have some error', error);
        })
    }
  }
};
</script>
