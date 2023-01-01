<template>
    <div class="resturent-details">
{{ resturent }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'resturent-details',
    data(){
        return{
            id:this.$route.params.id
        }
    },
    computed:{
        resturent(){
            return this.getResturentById(this.id);
        },
        ...mapGetters('resturents',{
            getResturentById:'getResturentById'
        })
    }

}
</script>