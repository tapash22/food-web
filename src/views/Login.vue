<template>
    <v-container>
        <v-row>
            <v-card>
                <form v-on:submit.prevent="login">
                    <h3>Login</h3>
                    <div class="form-wrapper">
                        <label>username</label>
                        <input v-model="username" placeholder="Enter your name"/>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { CometChat } from '@cometchat-pro/chat';
export default {
    data(){
        return{
            username:'',
            showLoding:false,
        }
    },

    methods:{
        login(){
            var AUTH_KEY='4399687dc626187f07919bdd86c2c6c9bbf7d700';
            this.showLoding= true;
            var user = new CometChat.User(this.username);
            user.setName(this.username);

            CometChat.createUser(user,AUTH_KEY).then(
                user =>{
                    console.log('create user',user);
                    this.showLoding= false;
                    CometChat.login(this.username,AUTH_KEY).then(
                        (data) =>{
                            console.log(data);
                            this.showLoding= false;
                            this.$router.push({
                                name:"chat"
                            });
                        },
                        error =>{
                            this.showLoding= false;
                            alert( 'something wrong');
                            console.log(erroe.code);
                        }
                    )
                },
                // error =>{
                //     console.log(error.code);
                //     this.showLoding= false;
                //     CometChat.login(this.username,AUTH_KEY).then(
                //         (data)=>{
                //             console.log(data);
                //             this.showLoding=false;
                //             this.$router.push({
                //                 name:'chat'
                //             });
                //         },
                //         error =>{
                //             this.showLoding = false;
                //             alert("something wrong ");
                //             console.log('login faild');
                //         }
                //     )
                // }
            )
        }
    }
}
</script>