<template>
    <section>
        <article>
            <h1>404</h1>
            <p>La page que vous cherchez n'existe pas</p>
            <router-link to="/">
                <Bouton_Global text="Retour à l'accueil" />
            </router-link>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue';


</script>
<style lang="scss" scoped>
    section{
        background-color: #5C3D3B;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        article{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            width: 50%;
            height: 80%;
            h1{
                position: relative;
                font-size: 10em;
                color: white;
                &::before{
                    content: "Error";
                    color: #ff0000;
                }
            }
            a{
                width: 50%;
                button{
                    width: 100%;
                }
            }
        }
    }
</style>