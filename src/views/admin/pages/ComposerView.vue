<template>
<div class="composer-view">
    <v-container>
    <v-card>
        <v-card-title class="d-flex justify-center text-uppercase green lighten-1 white--text">Sent Mail</v-card-title>
        <v-card-text class="">
            <form>
                <v-text-field dense outlined hide-details v-model="form.email" placeholder="Enter your email" class="my-2" />
                <v-text-field dense outlined hide-details v-model="form.subject" placeholder="Enter subject line" class="my-2" />
                <VueEditor v-model="form.text" />

                <v-btn color="green" class="white--text font-weight-bold text-body-1 my-2" @click="submit">Send</v-btn>
            </form>
        </v-card-text>
    </v-card>
    </v-container>
</div>
</template>

<script>
import {
    VueEditor
} from "vue2-editor";

export default {
    name: 'composer-view',

    data() {
        return {
            form: {
                subject: '',
                email: '',
                text: ''
            }
        }

    },
    components: {
        VueEditor,
    },

    methods:{
        submit(){
            console.log(this.form);
        }
    }
}
</script>
