<template>
    <section class="section_projets">
        <article class="flex article-color-main">
            <div id="project_com">
                <img src="../assets/images/image_espace_commentaire.png" alt="Image du projet d'espace commentaire dynamique">
                <hr>
                <div id="para_com">
                    <h3 class="para_com_child">Projet: Espace commentaire dynamique</h3>
                    <p class="para_com_child">
                        Ce projet a pour but de créer espace commentaire dynamique.
                    </p>
                    <p class="para_com_child">
                        Langage utilisé: HTML5, CSS3, Javascript + Vue.Js
                    </p>
                    <p class="para_com_child">
                        Logiciel utilisé: Visual studio code
                    </p>
                    <Bouton_Global class="para_com_child" />
                </div>
            </div>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue';


</script>
<style lang="scss" scoped>
section{
    background-color: #000000;
    article{
        #project_com{
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 5rem;
        }
        img{
            width: 350px;
            height: 400px;
            border: 3px solid black;
            box-shadow: 0 0 10px 1px white;
            border-radius: 20px;
        }
        hr{
            height: 200px;
            width: 1px;
        }

        #para_com{
            display: flex;
            flex-direction: column;

            gap: 10px;
        }
    }
}
</style>