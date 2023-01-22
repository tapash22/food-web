<template>
<div class="add-restaurant" style="display:block">
    <BaseForm name="name" type="text" :value="form.name" @input="changeValue($event)" />
    <BaseForm name="email" type="email" :value="form.email" @input="changeValue($event)" />
    <BaseForm name="address" type="textarea" :value="form.address" @input="changeValue($event)" />
    <BaseForm name="phone" type="number" :value="form.phone" @input="changeValue($event)" />
    <BaseForm name="country" type="country" :value="form.country" @input="changeValue($event)" />
    <BaseForm name="zipcode" type="number" :value="form.zipcode" @input="changeValue($event)" />

    <br>{{form.name}}-{{form.email}}-{{form.address}}-{{form.phone}}-{{form.country}}-{{form.zipcode}}
    {{form2}}
</div>
</template>

<script>
import BaseForm from '../components/BaseForm.vue';

export default {
    name: 'add-restaurant',

    data() {
        return {
            form: {
                name: '',
                email: '',
                address: '',
                phone: '',
                country: '',
                zipcode: ''

            },

            form2: null
        }
    },

    computed: {

    },

    components: {
        BaseForm
    },

    methods: {
        changeValue($event) {
            this.form = $event;
        },

    }
}
</script>

<style scoped>
.add-restaurant {
    display: flex;
    justify-content: center;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input {
    font-size: 30px;
    border: 1px double rgb(102, 97, 96);
    border-radius: 4px;
}

button {
    font-size: 16px;
    background: rgb(64, 179, 140);
    padding: 0.4rem 1.3rem;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin: 10px;
}

span {
    width: 30px;
    float: right;
    cursor: pointer;
}

span:hover {
    color: brown;
}

.previous {
    border: 1.5px solid;
    padding: 5px;
    margin-bottom: 10px;
}
</style>
