<template>
<nav>
    <v-app-bar app>
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndUp"  @click="mini = !mini"></v-app-bar-nav-icon>
             <v-app-bar-nav-icon v-else  @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="title">
            <router-link to="/" class="text-decoration-none black--text">FoodApp</router-link>
        </v-app-bar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y bottom left rounded class="pa-0">
            <template v-slot:activator="{ on, attrs }">
                <v-badge :content="cartItemCount" :value="cartItemCount" offset-x="10" offset-y="20" color="green lighten-1"  overlap>
                        <v-icon large color="red" class="mt-2" v-bind="attrs" v-on="on">
                            mdi-food-takeout-box
                        </v-icon>
                </v-badge>
            </template>

            <div @click="$event.stopPropagation()">
                <MiniCard />
            </div>

        </v-menu>

        <v-dialog v-model="dialog" max-width="600px" min-width="360px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text class="mx-2" color="red" v-bind="attrs" v-on="on">
                    Login
                </v-btn>
            </template>
            <TabForm />
         
        </v-dialog>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer"  :mini-variant.sync="mini" :permanent="$vuetify.breakpoint.smAndUp">
        <v-list-item class="text-center d-block my-5">
            <v-list-item-avatar color="red">
                <v-icon color="white">mdi-food-fork-drink</v-icon>
            </v-list-item-avatar>
            <v-list-item-title class="my-2">FoodMenu</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense v-for="item in items" :key="item.id">
            <v-list-item color="indigo" :to="item.path" active-class="light-green darken-3">
                <v-list-item-icon>
                    <v-icon color="red darken-2">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="black--text ">{{ item.name }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

</nav>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import MiniCard from './MiniCard.vue';
import TabForm from '@/components/TabForm.vue';

export default {
    data() {
        return {
            dialog: false,
            drawer: false,
            mini: true,
            items: [{
                    id: 1,
                    icon: 'mdi-home',
                    name: 'Home',
                    path: '/'
                },
                {
                    id: 2,
                    icon: 'mdi-food-takeout-box',
                    name: 'HomeMade',
                    path: '/homemade'
                },
                {
                    id: 3,
                    icon: 'mdi-food-croissant',
                    name: 'DryFood',
                    path: '/dryfood'
                },
                {
                    id: 4,
                    icon: 'mdi-food-turkey',
                    name: 'ReadyToCook',
                    path: '/readytocook'
                },
                {
                    id: 5,
                    icon: 'mdi-food-fork-drink',
                    name: 'Restaurants',
                    path: '/restaurants'
                },

            ]
        }
    },

    components: {
        MiniCard,
        TabForm
    },

    computed: {
        passwordMatch() {
            return () => this.password === this.verify || "Password must match";
        },
        ...mapGetters('cart', {
            cartItemCount: 'cartItemCount'
        })
    },

    methods: {
        validate() {
            if (this.$refs.loginForm.validate()) {
                // submit form to server/API here...
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    },
}
</script>


<style scoped>
.v-badge__badge {
    color:red;
}
</style>