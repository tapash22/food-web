<template>
<div class="user-details">
    <v-sheet class="my-5 pa-2" height="50px" elevation="10">
        <v-text-field v-model="search" dense outlined hide-details rounded append-icon="mdi-magnify" />
    </v-sheet>

    <v-row v-if="filtervalue">
        <v-col cols="12" sm="12" md="3" lg="3" v-for="user in filtervalue" :key="user.id">
            <v-card>
                <v-card-title>{{user.name}}</v-card-title>
                <v-card-subtitle>{{user.title}}</v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-else>

        <v-col cols="12" sm="12" md="3" lg="3" v-for="user in users" :key="user.id">
            <v-card>
                <v-card-title>{{user.name}}</v-card-title>
                <v-card-subtitle>{{user.title}}</v-card-subtitle>
            </v-card>
        </v-col>

    </v-row>
</div>
</template>

<script>
export default {
    name: 'user-details',

    data() {
        return {
            users: [{
                    id: 1,
                    name: 'tapash',
                    title: 'paul'
                },
                {
                    id: 2,
                    name: 'tuapash',
                    title: 'paul'
                },
                {
                    id: 3,
                    name: 'tyapash',
                    title: 'paul'
                },
                {
                    id: 4,
                    name: 't5apash',
                    title: 'paul'
                },
                {
                    id: 5,
                    name: 'tqapash',
                    title: 'paul'
                },
                {
                    id: 6,
                    name: 'twapash',
                    title: 'paul'
                },
                {
                    id: 7,
                    name: 'ttapash',
                    title: 'paul'
                },
                {
                    id: 8,
                    name: 'papash',
                    title: 'paul'
                },
            ],
            search:''
        }
    },

    computed: {
        filtervalue() {
            return this.users.filter(user =>{
                return user.name.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    }
}
</script>
