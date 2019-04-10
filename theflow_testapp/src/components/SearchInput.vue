<template>
    <input @input="onInput($event)" class="input is-success search_input" type="text" placeholder="Search">
</template>

<script>
    export default {
        methods: {
            onInput($event){
                this.$emit('input', $event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.search_input{
    margin: 15px 0;
}
</style>