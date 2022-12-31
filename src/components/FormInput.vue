<template>
    <div>
      <FormElement :field="name">
        <template v-slot="{field}">
        <input v-model="field.value" class="input">
      </template>
      </FormElement>
      <FormElement :field="email">
        <template v-slot="{field}">
        <input v-model="field.value" class="input">
      </template>
      </FormElement>
      <FormElement :field="subject">
        <template v-slot="{field}">
        <input v-model="field.value" class="input">
      </template>
      </FormElement>
      <FormElement :field="description">
        <template v-slot="{field}">
        <textarea v-model="field.value" class="input"></textarea>
      </template>
      </FormElement>
    </div>
  </template>

  <script>
  import FormElement from './FormElement.vue';

  export default {
    components: {
      FormElement
    },

    data() {
      return {
        name: {
          title: 'Name',
          value: ''
        },
        email:{
            title:'email',
            value:''
        },
        subject:{
            title:'subject',
            value:''
        },
        description: {
          title: 'Job description',
          value: ''
        },
      }
    }
  }
  </script>

  <style>
.input{
    border-bottom: 1px solid gray;
    width: 100%;
}
  </style>