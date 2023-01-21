<template>
<nav>
    <v-app-bar>
        <v-app-bar-title class="text-body-1 font-weight-bold">FoodApp</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-badge content="1" value="1" color="green" overlap class="mx-3">
            <v-icon class="text-h5">
                mdi-bell
            </v-icon>
        </v-badge>
        <v-menu offset-y bottom left rounded class="pa-0">
            <template v-slot:activator="{ on, attrs }">
                <v-avatar size="36" class="mx-2 green">
                    <v-img src="@/assets/logo.png" v-bind="attrs" v-on="on" />
                </v-avatar>
            </template>

            <div @click="$event.stopPropagation()">
                 <ProfileCard /> 
            </div>

        </v-menu>

    </v-app-bar>
</nav>
</template>

<script>
import ProfileCard from './ProfileCard.vue';

export default {
    name: 'admin-navigation',

    components:{
        ProfileCard,
    }
}
</script>
