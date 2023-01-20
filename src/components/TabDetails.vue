<template>
<div class="tab-details">
    <template>
        <v-tabs v-model="tab_m" centered>
            <v-tab v-for="card in tab_n" :key="card" class="text-body-1 green--text">
                {{card}}
            </v-tab>
        </v-tabs>
    </template>

    <v-tabs-items v-model="tab_m">
        <v-tab-item class="text-center my-5" v-for="tabList in tab_b" :key="tabList">
            <v-list>

                <v-list-item-title class="text-start my-5 text-uppercase">{{tabList.text}}</v-list-item-title>
                <v-list-item v-if="tabList.r_foods" class="list-item">
                    <template v-for="food in tabList.r_foods">
                        <v-card :key="food.id" height="150" class="d-flex justify-space-between">
                            <v-card-text class="d-block">
                                <v-img :src="food.image" width="120" height="100" class="rounded-lg" />
                                <v-card-title class="pa-0 text-body-1 font-weight-bold my-1 black--text">{{food.name}}</v-card-title>
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="text-body-1 font-weight-bold black--text d-flex justify-end">Tk. {{food.price}}</v-card-title>
                                <v-card-subtitle class="d-flex justify-end align-end subtitle" ><v-avatar size="32" color="green lighten_1"><v-icon class="text-h5 font-weight-bold text-end " color="white">mdi-plus</v-icon></v-avatar></v-card-subtitle>
                            </v-card-text>
                        </v-card>
                    </template>
                </v-list-item>

                <v-list-item v-else class="d-flex justify-center text-body-1 font-weight-bold text-uppercase">
                    {{tabList.text}}
                </v-list-item>

            </v-list>

        </v-tab-item>
    </v-tabs-items>
</div>
</template>

<script>
export default {
    name: 'tab-details',
    props: [
        'tab_n', 'tab_b', 'tab_m'
    ]
}
</script>

<style scoped>
.list-item{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2,150px);
    grid-gap: 1em;
}
.subtitle{
    height: 80px;
}
</style>