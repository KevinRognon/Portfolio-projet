<template>
    <section id="ec" class="section_projets">
        <article class="flex article-color-second">
            <div id="project_com">
                <img class="img_para_com" src="../assets/images/image_espace_commentaire.png" alt="Image du projet d'espace commentaire dynamique">
                <hr class="hr_com">
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
                    <Bouton_Global @click="show = !show" text="Découvrir" class="para_com_child para_com_button" />

                    <Modal_CV titre="Espace Commentaire" technos="HTML5, CSS3, Javascript + VueJs" lien="http://kevinrognon.github.io/CV_CEF_TEST" :show="show"/>
                </div>
            </div>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue';
import Modal_CV from './Modals/Modal_CV.vue';
import { onMounted } from 'vue';
import gsap from 'gsap'

defineProps({
    show: Boolean,
})


onMounted(() => {
    let img = gsap.to(
        '.img_para_com', {
                opacity: 1,
                x: 0
            });
    let hr = gsap.to(
        '.hr_com', {
                opacity: 0.4,
                y: 0
            });
    let para = gsap.to(
        '.para_com_child', {
                opacity: 1,
                x: 0,
                stagger: 0.2
            });
    let section = document.querySelector('.para_com_button');
    const intersect = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio <= 0) {
                img.reverse().duration(1);
                hr.reverse().duration(1);
                para.reverse().duration(1);
            }
            else {
                img.restart().duration(2);
                hr.restart().duration(1);
                para.restart().duration(2);
        }
    })
    intersect.observe(section);
});


</script>
<style lang="scss" scoped>
section{
    article{
        #project_com{
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 5rem;
        }
        img{
            transform: translateX(-100px);
            opacity: 0;
            width: 350px;
            height: 400px;
            border: 3px solid black;
            box-shadow: 0 0 10px 1px white;
            border-radius: 20px;
        }
        hr{
            height: 200px;
            width: 1px;
            opacity: 0;
            transform: translateY(-100%);
        }

        #para_com{
            display: flex;
            flex-direction: column;

            gap: 10px;
        }

        .para_com_child {
            opacity: 0;
            transform: translateX(200px);
        }
    }
}
</style>
