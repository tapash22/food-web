<template>
    <div class="form-element">
        <div>{{ field.title }}</div>

        <slot :field="field"></slot>

        <!-- <button @click="empty">submit</button> -->
        <!-- <div v-if="empty" class="empty">Must not be empty</div> -->
    </div>
</template>
  
<script>
export default {
    props: {
        field: {
            type: Object,
            default: () => { }
        },
    },
    computed: {
        empty() {
            if (this.field.value) {
                console.log(this.field);
            }
            return true
        }
    },
}
</script>
  
<style scoped>
.form-element {
    margin-bottom: 1rem
}

.empty {
    color: red
}
</style>