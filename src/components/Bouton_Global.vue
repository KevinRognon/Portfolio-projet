<template>
    <button>{{ text }}</button>
</template>


<script setup>
    defineProps({
        text: String
    })
</script>


<style lang="scss" scoped>

button{
    width: 100px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    transition: background-color 0.4s, color 0.4s;
    &:hover{
        background-color: white;
        color: #5C3D3B;
    }
}
</style>