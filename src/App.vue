<template>
<v-app>
    <TheNavigation />
    <v-main>
        <v-container>
            <router-view />
        </v-container>

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
    components: {
        TheNavigation
    },

    methods: {

    }
};
</script>
