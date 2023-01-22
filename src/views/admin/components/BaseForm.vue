<template>
<div class="d-block">
    <label class="text-h6 my-2">{{name}}</label><br />
    <input :type="type" :value="value" @input="updateValue" />

</div>
</template>

<script>
export default {
    props: ['value', 'name','type'],
    data() {
        return {
            form1: null
        }
    },

    methods: {
        updateValue($event) {
          this.form1 = $event.target.value
            this.$emit('input', this.form1)
        }
    },
}
</script>

<style scoped>
input {
    border: 1px solid black;
}
</style>
