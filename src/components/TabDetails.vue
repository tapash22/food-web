<template>
<div class="tab-details">
    <template>
        <v-tabs v-model="tab_m" centered>
            <v-tab v-for="card in tab_n" :key="card">
                {{card}}
            </v-tab>
        </v-tabs>
    </template>

    <v-tabs-items v-model="tab_m">
        <v-tab-item class="text-center my-5" v-for="tabList in tab_b" :key="tabList">
            {{tabList.text}}

        </v-tab-item>
    </v-tabs-items>
</div>
</template>

<script>
export default {
    name:'tab-details',
    props:[
        'tab_n','tab_b' ,'tab_m'
    ]
}
</script>
