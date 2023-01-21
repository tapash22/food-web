<template>
    <div class="profile-card">
        <v-card min-width="150">
            <v-card-text class="d-block pa-0">
                <v-list v-for="list in lists" :key="list.id">
                    <v-list-item class="pa-0 d-flex justify-space-around" >
                        <v-icon color="green lighten-1" class="mx-2">mdi-facebook</v-icon>
                        <v-list-item-title class="text-body-1 text-center">{{list.name}}</v-list-item-title>
                    </v-list-item>
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
                },
                 {
                    id:2,
                    name:'Setting',
                    link:'setting',
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