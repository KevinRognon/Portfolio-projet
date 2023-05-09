<template>
    <div>
        <div @click="returnTop">
            <img src="../assets/images/fleche_haut.png" alt="Flèche de retour en haut de page">
        </div>
    </div>
</template>
<script setup>
    function returnTop(){
        window.scrollTo(0,0);
    }
</script>
<style lang="scss" scoped>
    div{
        width: 32px;
        height: 32px;

        position: fixed;
        bottom: 50px;
        right: 50px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>