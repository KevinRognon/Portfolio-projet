<template>
    <header>
        <nav>
            <ul>
                <router-link to="/"><h1>K.ROGNON</h1></router-link>
                <router-link to="/projects">Projects</router-link>
                <router-link to="/contact">Contact</router-link>
            </ul>
        </nav>
    </header>

</template>
<script setup>

</script>
<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;


    width: 100%;
    height: 60px;


    background-color: #36494E;

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
                padding: 5px;
                border-radius: 20px;
                &:hover {
                    background-color: white;
                    color: #36494E;
                }
            }
            .router-link-active{
                background-color: white;
                color: #36494E;
            }
        }
    }
}

</style>