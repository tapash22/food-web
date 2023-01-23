<template>
<div>
    <div class="input" v-for="val in value" :key="val">
    <label class="text-h6 my-2">{{val}}</label><br />
    <input   :value="val" @input="updateValue($event.target.value)" />
</div>
</div>

</template>

<script>
export default {
    props: {
        value:{
            type:Object,
            default:''
        }
    },

    methods: {
        updateValue(value) {

            this.$emit('input', value)
        }
    },
}
</script>


<style scoped>
input {
    border: 1px solid black;
}
</style>