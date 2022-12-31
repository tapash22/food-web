<template>
    <div class="food-card">
        <v-card>
            <v-img height="200px" src="../assets/f3.png">
                <v-card-text class="pink lighten-2 d-block pa-0 ma-0">
                    <v-card-title class="black--text text-caption text-left " color="info">{{ item.name }}</v-card-title>
                    <v-card-subtitle
                        class="white--text h-50 pa-0 text-right mx-2 text-body-1">{{ item.price }}</v-card-subtitle>
                </v-card-text>

            </v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'food-card',
    props:['item']
}
</script>