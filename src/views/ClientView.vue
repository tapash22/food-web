<template>
<div class="cliten-view">
    <TheNavigation />
    <v-main>
        <v-container>
            <router-view />
        </v-container>
        <TheFooter />
    </v-main>
</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue'

export default {
    name: 'client-view',

    components:{
        TheNavigation,
        TheFooter
    }
}
</script>
