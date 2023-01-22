<template>
<div class="list">
    <v-checkbox dense hide-details class="pl-4 pt-1" />
    <v-list-item @click="display = !display" class="pb-2">
        <v-list-item-title v-if="display">
            <v-icon small>mdi-star</v-icon>
        </v-list-item-title>
        <v-list-item-title v-else>
            <v-icon>
                mdi-star-outline
            </v-icon>
        </v-list-item-title>
    </v-list-item>

    <v-list-item-title class="text-body-1 font-weight-bold pb-2">{{mail.title}}</v-list-item-title>
    <v-list-item-subtitle class="text-body-2 mt-2">{{mail.des}}</v-list-item-subtitle>

    <v-list-item-title class="mt-1">{{mail.time}}</v-list-item-title>
</div>
</template>

<script>
export default {
    name: 'message-view',
    props: ['mail'],
    data(){
        return{
              display: false,
        }
    }
}
</script>
