<template>
    <header>
        <nav>
            <ul>
                <h1>K.ROGNON</h1>
                <router-link to="/">Home</router-link>
            </ul>
        </nav>
    </header>

</template>
<script setup>

</script>
<style lang="scss" scoped>
header {
    background-color: #36494E;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
    nav{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;

        ul {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            a{
                text-decoration: none;
            }
        }
    }
}

</style>