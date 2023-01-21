<template>
<nav>
    <v-app-bar app>
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
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" v-bind="attrs" v-on="on" />
                </v-avatar>
            </template>

            <div @click="$event.stopPropagation()">
                <ProfileCard />
            </div>

        </v-menu>

    </v-app-bar>

    <v-navigation-drawer app permanent>
        <v-app-bar-title class="d-flex justify-center text-body-1 font-weight-bold mt-16 my-2">
            Admin
        </v-app-bar-title>
        <div class="image">
            <v-avatar size="42" class="d-flex justify-center">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
            </v-avatar>
        </div>
        <v-divider></v-divider>
        <v-list dense expand nav class="pa-0">

            <template v-for="item in lists">
                <v-list-item v-if="!item.children" color="indigo" :key="item.name" :to="item.path" active-class="info">
                    <v-list-item-icon>
                        <v-icon class="green--text">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="black--text">{{ item.name }}</v-list-item-title>
                </v-list-item>

                <v-list-group v-else :group="item.path" color="green lighten-1" :key="item.path">

                    <template #activator>
                        <v-list-item class="black--text pl-0">
                            <v-icon class="green--text ml-0 pa-0">{{ item.icon }}</v-icon>
                            <v-list-item-title class="black--text ml-8">
                                {{ item.name }}
                            </v-list-item-title>
                        </v-list-item>
                    </template>

                    <template v-for="subItem in item.children">
                        <v-list-item v-if="!subItem.children" class="ml-5" :key="subItem.path" :to="item.path +'/'+ subItem.path">
                            <v-list-item-icon class="ml-4 green--text">
                                <v-icon class="green--text">{{subItem.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class=" black--text">
                                {{ subItem.name }}
                            </v-list-item-title>
                        </v-list-item>
                    </template>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
import ProfileCard from './ProfileCard.vue';

export default {
    name: 'admin-navigation',

    data() {
        return {
            lists: [{
                    id: 1,
                    name: 'DashBoard',
                    path: '',
                    icon: 'mdi-view-dashboard',
                },
                {
                    id: 2,
                    name: 'Email',
                    path: '',
                    icon: 'mdi-email',
                    children: [

                        {
                            id: 1,
                            name: 'Inbox',
                            path: '',
                            icon: 'mdi-inbox-full',

                        },
                        {
                            id: 2,
                            name: 'EmailCompose',
                            path: '',
                            icon: 'mdi-email-edit',
                        },
                        {
                            id: 3,
                            name: 'Sent',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            id: 4,
                            name: 'Starred',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Page',
                    path: '',
                    icon: 'mdi-email',
                    children: [

                        {
                            id: 1,
                            name: 'page1',
                            path: '',
                            icon: 'mdi-inbox-full',

                        },
                        {
                            id: 2,
                            name: 'page2',
                            path: '',
                            icon: 'mdi-email-edit',
                        },
                        {
                            id: 3,
                            name: 'page3',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            id: 4,
                            name: 'page4',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'form',
                    path: '',
                    icon: 'mdi-email',
                    children: [

                        {
                            id: 1,
                            name: 'form1',
                            path: '',
                            icon: 'mdi-inbox-full',

                        },
                        {
                            id: 2,
                            name: 'form2',
                            path: '',
                            icon: 'mdi-email-edit',
                        },
                        {
                            id: 3,
                            name: 'form3',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            id: 4,
                            name: 'form4',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'intro',
                    path: '',
                    icon: 'mdi-email',
                    children: [

                        {
                            id: 1,
                            name: 'intro1',
                            path: '',
                            icon: 'mdi-inbox-full',

                        },
                        {
                            id: 2,
                            name: 'intro2',
                            path: '',
                            icon: 'mdi-email-edit',
                        },
                        {
                            id: 3,
                            name: 'intro3',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            id: 4,
                            name: 'intro4',
                            path: '',
                            icon: 'mdi-inbox-full',
                        },
                    ]
                },

            ]
        }
    },

    components: {
        ProfileCard,
    }
}
</script>

<style scoped>
.image {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
