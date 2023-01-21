<template>
<div class="inbox-view">
    <v-card>
        <v-card-text class="pa-0">
            <v-list v-for="mail in mails" :key="mail.id" class="list">
                <v-checkbox dense hide-details />
                <v-rating size="14" />

                <v-list-item-title class="text-body-1 font-weight-bold">{{mail.title}}</v-list-item-title>
                <v-list-item-subtitle class="text-body-2">{{mail.des}}</v-list-item-subtitle>

                <v-list-item-title>{{mail.time}}</v-list-item-title>
            </v-list>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'inbox-view',

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
    }

}
</script>

<style scoped>
.list {
    display: grid;
    grid-template-columns: 50px 50px 300px 1fr 100px;
    grid-template-rows: repeat(50px);
}
</style>
