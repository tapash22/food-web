<template>
<div>
    <v-tabs v-model="tab" show-arrows background-color="deep-purple lighten-4" icons-and-text grow>
        <v-tabs-slider color="red lightn-4"></v-tabs-slider>
        <v-tab v-for="i in tabs" :key="i.id">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
        </v-tab>
        <v-tab-item>
            <v-card class="px-4">
                <v-card-text>
                    <v-form ref="loginForm" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="loginPassword" :append-icon="show1 ? 'eye' : 'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                            </v-col>
                            <v-col class="d-flex" cols="12" sm="6" xsm="12">
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                <v-btn x-large block :disabled="!valid" color="success" @click="validate"> Login </v-btn>
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
                                <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1">
                                </v-text-field>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                <v-btn x-large block :disabled="!valid" color="success" @click="validate">Register</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs>
</div>
</template>

<script>
export default {
    name: 'tab-form',
    data() {
        return {
            tab: 0,
            tabs: [{
                    id: 1,
                    name: "Login",
                    icon: "mdi-account"
                },
                {
                    id: 2,
                    name: "Register",
                    icon: "mdi-account-outline"
                }
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
        }
    },

    methods:{
        validate(){
            this.$router.push('/admin')
        }
    }
}
</script>
