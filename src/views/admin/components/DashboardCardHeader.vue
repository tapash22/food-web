<template>
<div class="dashboard-card-header">
    <v-card class="mx-auto" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <div class="text-body-1">
                    {{card.title}}
                </div>
                <v-list-item-title class="text-h6 my-2">
                    {{card.amount}}
                </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="32" :color="card.color" rounded-circle>
                <v-icon class="text-h5" color="white">{{card.icon}}</v-icon>
            </v-list-item-avatar>
        </v-list-item>
        <v-card-text class="">
            <v-progress-linear :color="card.color" rounded :value="card.percentage"></v-progress-linear>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between mx-2">
            <p class=" text--primary" left>
                Previous Period
            </p>
            <v-spacer></v-spacer>
            <p right>{{card.percentage}}%</p>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'dashboard-card-header',
    props: ['card'],
}
</script>
