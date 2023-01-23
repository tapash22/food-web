<template>
<div class="add-restaurant" style="display:block">
    <BaseInput v-model="form" />
    <!-- <BaseForm name="name" type="text" v-model="form.name"  />
 <BaseForm name="name" type="text" v-model="form.email"  />
 <BaseForm name="name" type="text" v-model="form.address"  /> -->
    <br>{{form.name}}-{{form.email}}-{{form.address}}

</div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue';

export default {
    name: 'add-restaurant',

    data() {
        return {
            form: {
                name: '',
                email: '',
                address: '',
                // phone: '',
                // country: '',
                // zipcode: ''

            },

        }
    },

    computed: {

    },

    components: {
        BaseInput
    },

    methods: {
        chengeValue() {
            console.log(this.form)
        }

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
