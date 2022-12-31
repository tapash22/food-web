<template>
    <nav>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>
            <v-app-bar-title class="title">FoodApp</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-text-field class="shrink" dense hide-details outlined hint="search" rounded append-icon="mdi-magnify"></v-text-field>
            <!-- <v-btn class="mx-2 orange accent-2" @click="dialog=false"><router-link class="white--text text-decoration-none" to="/login">Login</router-link></v-btn> -->
            <v-dialog v-model="dialog" max-width="600px" min-width="360px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text class="mx-2" color="red"  v-bind="attrs" v-on="on">
                        Login
                    </v-btn>
                </template>
                <div>
                    <v-tabs v-model="tab" show-arrows background-color="deep-purple lighten-4" icons-and-text grow>
                        <v-tabs-slider color="red lightn-4"></v-tabs-slider>
                        <v-tab v-for="i in tabs" :key="i">
                            <v-icon large>{{ i.icon }}</v-icon>
                            <div class="caption py-1">{{ i.name }}</div>
                        </v-tab>
                        <v-tab-item>
                            <v-card class="px-4">
                                <v-card-text>
                                    <v-form ref="loginForm" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="loginEmail" :rules="loginEmailRules"
                                                    label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="loginPassword"
                                                    :append-icon="show1 ? 'eye' : 'eye-off'"
                                                    :rules="[rules.required, rules.min]"
                                                    :type="show1 ? 'text' : 'password'" name="input-10-1"
                                                    label="Password" hint="At least 8 characters" counter
                                                    @click:append="show1 = !show1"></v-text-field>
                                            </v-col>
                                            <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                                <v-btn x-large block :disabled="!valid" color="success"
                                                    @click="validate"> Login </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-card class="px-4">
                                <v-card-text>
                                    <v-form ref="registerForm" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="firstName" :rules="[rules.required]"
                                                    label="First Name" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="lastName" :rules="[rules.required]"
                                                    label="Last Name" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="email" :rules="emailRules" label="E-mail"
                                                    required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="password"
                                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                    :rules="[rules.required, rules.min]"
                                                    :type="show1 ? 'text' : 'password'" name="input-10-1"
                                                    label="Password" hint="At least 8 characters" counter
                                                    @click:append="show1 = !show1"></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field block v-model="verify"
                                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                    :rules="[rules.required, passwordMatch]"
                                                    :type="show1 ? 'text' : 'password'" name="input-10-1"
                                                    label="Confirm Password" counter @click:append="show1 = !show1">
                                                </v-text-field>
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                                <v-btn x-large block :disabled="!valid" color="success"
                                                    @click="validate">Register</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </div>
            </v-dialog>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent>
            <v-list-item class="text-center d-block my-5">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
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
export default {
    data() {
        return {

            dialog: false,
            tab: 0,
            tabs: [
                { name: "Login", icon: "mdi-account" },
                { name: "Register", icon: "mdi-account-outline" }
            ],
            valid: true,

            firstName: "",
            lastName: "",
            email: "",
            password: "",
            verify: "",
            loginPassword: "",
            loginEmail: "",
            loginEmailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            emailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],

            show1: false,
            rules: {
                required: value => !!value || "Required.",
                min: v => (v && v.length >= 6) || "Min 6 characters"
            },

            dialogm1: '',
            drawer: false,
            mini: true,
            items: [
                {
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
                    name: 'Restaurant',
                    path: '/restaurant'
                },

            ]
        }
    },
    computed: {
        passwordMatch() {
            return () => this.password === this.verify || "Password must match";
        }
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

</style>