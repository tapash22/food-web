<template>
    <v-container>
        <button v-on:click="logout">Logout</button>
    </v-container>
</template>

<script>
import { CometChat } from '@cometchat-pro/chat'
export default {
components:{

},
methods:{
    async logout(){
        try{
            await CometChat.logout();
            this.$router.push({
                name:'login'
            });
        }
        catch(error){
            console.log(error);
        }
    }
}
}
</script>