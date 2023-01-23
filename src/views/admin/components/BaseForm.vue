<template>
<div class="d-block">
    <!-- <label class="text-h6 my-2">{{name}}</label><br />
    <input :type="type" :value="value" @input="updateValue($event.target.value)" /> -->
    <form ref="form">
        <BaseInput v-for="(value,i) in value" :key="i" :value="value[i]" />
        <v-btn @click="send">Send</v-btn>
    </form>
</div>
</template>

<script>
import BaseInput from './BaseInput.vue';

export default {
    props: ['value', '', ''],
    data() {
        return {
            form1: null
        }
    },
    components: {
        BaseInput
    },

    methods: {
        send() {
            this.form1 = this.$refs.form
            console.log(this.form1);
        }
    },
}
</script>
