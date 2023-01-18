<template>
<div class="resturent-detail-dialog">
    <v-card>
        <v-img :src="resturent.image" height="150" />
        <v-card-text class="w-75 h-25">
            <v-card-title class="d-flex justify-center text-body-1 font-weight-bold">{{resturent.name }}</v-card-title>
            <v-card-subtitle class="d-flex justify-center text-body-2">House:40, Road:01, Block:#E, Bonosree, Rampura, Dhaka</v-card-subtitle>
        </v-card-text>
        <v-card-text>
            <TabDetails :tab_n="cards" :tab_b="tablists" :tab_m="tab" />
        </v-card-text>
    </v-card>
</div>
</template>

<script>
import TabDetails from '@/components/TabDetails.vue';
export default {
    name: 'resturent-detail-dialog',
    props: ['resturent'],
    data() {
        return {
            tablists: [{
                    id: 1,
                    name: 'review',
                    text: 'no review yet'
                },
                {
                    id: 1,
                    name: 'comment',
                    text: 'no comment yet'
                },
            ],
            cards: ['Review', 'Comment'],
            tab: null,
        }
    },
    components: {
        TabDetails
    }

}
</script>
