<template>
<div class="sent-view">
    <v-card>
        <v-card-title class="d-flex justify-center text-uppercase">This is sent inbox</v-card-title>
        <v-card-text class="pa-0 my-0 card-text">
            <v-list v-for="mail in mails" :key="mail.id">
                <MessageView :mail="mail" />
                 <v-divider></v-divider>
            </v-list>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
import MessageView from '../components/MessageView.vue';

export default {
    name: 'sent-view',

    data() {
        return {
          
            mails: [{
                    id: 1,
                    title: 'this is title',
                    rating: false,
                    checkbox: false,
                    des: 'this is a small discription for mail this is a small discription for mail this is a small discription for mail this is a small discription for mail',
                    time: '10:22'
                },
                {
                    id: 2,
                    title: 'this is title',
                    rating: false,
                    checkbox: false,
                    des: 'this is a small discription for mail',
                    time: '10:22'
                },
                {
                    id: 3,
                    title: 'this is title',
                    rating: false,
                    checkbox: false,
                    des: 'this is a small discription for mail',
                    time: '10:22'
                },
                {
                    id: 4,
                    title: 'this is title',
                    rating: false,
                    checkbox: false,
                    des: 'this is a small discription for mail',
                    time: '10:22'
                },
                {
                    id: 5,
                    title: 'this is title',
                    rating: false,
                    checkbox: false,
                    des: 'this is a small discription for mail',
                    time: '10:22'
                },
                {
                    id: 6,
                    title: 'this is title',
                    rating: false,
                    checkbox: false,
                    des: 'this is a small discription for mail',
                    time: '10:22'
                },
            ]
        }
    },

    components: {
        MessageView
    }

}
</script>

<style scoped>
.list {
    display: grid;
    grid-template-columns: 50px 60px 150px 1fr 100px;
    grid-template-rows: repeat(50px);
    height: 40px;
}
</style>
