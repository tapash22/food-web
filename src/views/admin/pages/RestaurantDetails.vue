<template>
<div class="restaurant-details">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-data-table :headers="headers" :items="restaurants" item-key="name" class="elevation-1" :search="search" :custom-filter="filterOnlyCapsText">
                    <template v-slot:top>
                        <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
                    </template>
                    <template v-slot:item.image="{ item }">
                        <div class="p-2">
                            <v-img :src="item.image" :alt="item.name" height="50px" width="50px"></v-img>
                        </div>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                  

                </v-data-table>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4">

            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'restaurant-details',
    data() {
        return {
            search: '',
            restaurants: [{
                    id: 1,
                    name: 'restaurant details with full',
                    image: 'https://assets.vogue.com/photos/605b998c1087bb7115b724b5/master/pass/Sona_Interiors_048.jpg',
                    address: 'house:44; Road:01; Block:#E; Bonosree,Rampura',
                    rating: 4,
                    foods: [{
                            id: 1,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 2,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 3,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 4,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'restaurant4',
                    image: 'https://assets.vogue.com/photos/605b998c1087bb7115b724b5/master/pass/Sona_Interiors_048.jpg',
                    rating: 4,
                    address: 'house:44; Road:01; Block:#E; Bonosree,Rampura',
                    foods: [{
                            id: 1,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 2,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 3,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 4,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 5,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 6,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'restaurant1',
                    image: 'https://assets.vogue.com/photos/605b998c1087bb7115b724b5/master/pass/Sona_Interiors_048.jpg',
                    rating: 4,
                    address: 'house:44; Road:01; Block:#E; Bonosree,Rampura',
                    foods: [{
                            id: 1,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 2,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },

                    ]
                },
                {
                    id: 4,
                    name: 'restaurant2',
                    image: 'https://assets.vogue.com/photos/605b998c1087bb7115b724b5/master/pass/Sona_Interiors_048.jpg',
                    address: 'house:44; Road:01; Block:#E; Bonosree,Rampura',
                    rating: 4,
                    foods: [{
                            id: 1,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 2,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },
                        {
                            id: 3,
                            name: 'food-name',
                            image: require('@/assets/logo.png'),
                            price: 33,
                            detail: 'this is good food try it now'
                        },

                    ]
                }
            ],
            editedIndex: -1,
        }
    },

    computed: {
        headers() {
            return [{
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Image ',
                    value: 'image'
                },
                // {
                //     text: 'Calories',
                //     value: 'calories',
                //     filter: value => {
                //         if (!this.calories) return true

                //         return value < parseInt(this.calories)
                //     },
                // },
                // {
                //     text: ' Image',
                //     value: 'image'
                // },
                {
                    text: 'Address ',
                    value: 'address'
                },
                {
                    text: 'Rating ',
                    value: 'rating'
                },
                {
                    text: 'Foods (Q)',
                    value: 'foods.length'
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
                },
            ];
        }

    },
    methods: {
        filterOnlyCapsText(value, search, item) {
            return value != null &&
                search != null &&
                typeof value === 'string' &&
                value.toString().toLocaleLowerCase().indexOf(search) !== -1
        },

        deleteItem() {
            this.restaurants.splice(this.editedIndex, 1)
            this.closeDelete()
        },
    },
}
</script>

<style scoped>
.list {
    display: grid;
    grid-template-columns: 60px 300px 1fr 100px;
    grid-gap: 5px;
}

.list .list-item {
    display: grid;
    grid-template-columns: 90% 10%;
    grid-template-rows: 100%;
    grid-gap: 5px;
}
</style>
