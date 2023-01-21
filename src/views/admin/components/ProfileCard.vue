<template>
    <div class="profile-card">
        <v-card min-width="150" class="pa-0">
            <v-card-text class="d-block pa-0">
                <v-list v-for="list in lists" :key="list.id">
                    <router-link :to="list.link" class="text-decoration-none">
                    <v-list-item class="pa-0 d-flex justify-space-around" >
                        <v-icon color="green lighten-1" class="mx-2">{{list.icon}}</v-icon>
                        <v-list-item-title class="text-body-1 text-center">{{list.name}}</v-list-item-title>
                    </v-list-item>
                    </router-link>
                    <v-divider></v-divider>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'profile-card',
    data(){
        return{
            lists:[
                {
                    id:1,
                    name:'Profile',
                    link:'profile',
                    icon:'mdi-face-man'
                },
                 {
                    id:2,
                    name:'Setting',
                    link:'setting',
                    icon:'mdi-cog-outline'
                }
            ]
        }
    }
}
</script>

<style scoped>
.v-list-item{
    min-height: 30px;
}
</style>