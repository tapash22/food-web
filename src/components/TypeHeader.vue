<template>
<div class="type-header">
    <v-sheet class="d-flex justify-space-between my-2" width="100%" height="50">
        <h2 class="text-h6 font-weight-bold mx-5 align-self-center">{{name}}</h2>
        <router-link :to="link" class="text-decoration-none text-body-1 mx-5 black--text align-self-center">View All</router-link>
    </v-sheet>
</div>
</template>

<script>
export default {
    name:'type-header',
    props:['name','link']
}
</script>

<style scoped>
.type-header{
    display: flex;
    width: 100%;
}
</style>
