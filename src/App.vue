<template>
<v-app>
    <TheNavigation />
    <v-main>
        <v-container>
            <router-view />
        </v-container>
        <TheFooter />
    </v-main>

</v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue'

export default {
    name: "App",
    data: () => ({
        //
    }),
    components: {
        TheNavigation,
        TheFooter
    },

    methods: {

    }
};
</script>
