<template>
<v-footer color="green lighten-5">
    <v-row class=" my-2">
        <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
            <v-list class="d-flex justify-space-between  ">
                <v-list-item-title class="mx-5 text-h6 font-weight-bold align-center">FoodApp</v-list-item-title>
                <v-list-item class="d-flex justify-end">
                    <v-icon class="mx-2 text-h3" v-for="icon in icons" :key="icon" color="green lighten-1">
                        {{icon}}
                    </v-icon>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
    <v-row class="white my-2 ">
        <v-col cols="12" sm="6" md="3" lg="3" xl="3">
            <h2 class="text-h6 font-weight-bold  mx-5 my-5">&copy;2023 FoodApp</h2>
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="3" xl="3" v-for="text in texts" :key="text">
            <p class="text-body-1 mx-2 my-5 text-justify">
                {{text}}
            </p>
        </v-col>

    </v-row>
</v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: ['mdi-facebook', 'mdi-instagram'],
            texts: ['1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quae quasi consectetur necessitatibus reiciendis doloribus iure nihil aperiam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quae quasi consectetur necessitatibus reiciendis doloribus iure nihil aperiam sunt.',
                '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quae quasi consectetur necessitatibus reiciendis doloribus iure nihil aperiam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quae quasi consectetur necessitatibus reiciendis doloribus iure nihil aperiam sunt.',
                '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quae quasi consectetur necessitatibus reiciendis doloribus iure nihil aperiam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quae quasi consectetur necessitatibus reiciendis doloribus iure nihil aperiam sunt.'
            ]
        }
    }
}
</script>
