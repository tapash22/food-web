<template>
    <div class="resturent-food">
        <v-card>
            <v-img width="180" height="100%" src="https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50" />
            <v-card-text>
                <v-card-title>
                    name
                </v-card-title>
                <v-card-subtitle>price</v-card-subtitle>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'resturent-food',
    props:['list']
}
</script>