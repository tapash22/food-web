<template>
<div class="admin-view">
    <AdminNavigation />
    <v-main>
        <router-view />
    </v-main>
</div>
</template>

<script>
import AdminNavigation from './components/AdminNavigation.vue';

export default {
    name: 'admin-view',

    components:{
        AdminNavigation,
    }
}
</script>
