<template>
    <footer>
        <div class="rsociaux">
            <a href="https://www.facebook.com/kevin.rognon.9" target="_blank"><img src="../assets/images/facebook.png" alt="Logo facebook"></a>
            <a href="https://github.com/KevinRognon" target="_blank"><img src="../assets/images/github.png" alt="Logo Github"></a>
        </div>
        <small>Copyright 2023 - Rognon Kevin</small>
    </footer>
</template>
<script setup>

</script>
<style lang="scss" scoped>
footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    background-color: #1a1a1a;
    padding: 30px;
    .rsociaux{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 50px;
            margin: 0 10px;
        }
    }
}
</style>