<template>
    <section id="cdc" class="section_projets">
        <article class="flex article-color-main">
            <div id="project_cdc">
                <img class="img_para_cdc" src="../assets/images/Image_cahier_des_charges.jpg" alt="Image du projet de cahier des charges">
                <hr class="hr_cdc">
                <div id="para_cdc">
                    <h3 class="para_cdc_child">Projet: Cahier des charges</h3>
                    <p class="para_cdc_child">
                        Ce projet a pour but de créer un cahier des charges.
                    </p>
                    <p class="para_cdc_child">
                        Langage utilisé: Aucun. Simple traitement de texte
                    </p>
                    <p class="para_cdc_child">
                        Logiciel utilisé: WordPad
                    </p>
                    <Bouton_Global text="Découvrir" class="para_cdc_child para_cdc_button" />
                </div>
            </div>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
onMounted(() => {
    let img = gsap.to(
        '.img_para_cdc', {
                opacity: 1,
                x: 0
            });
    let hr = gsap.to(
        '.hr_cdc', {
                opacity: 0.4,
                y: 0
            });
    let para = gsap.to(
        '.para_cdc_child', {
                opacity: 1,
                x: 0,
                stagger: 0.2
            });
    let section = document.querySelector('.para_cdc_button');
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
        #project_cdc{
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

        #para_cdc{
            display: flex;
            flex-direction: column;

            gap: 10px;
        }

        .para_cdc_child{
            opacity: 0;
            transform: translateX(200px);
        }
    }
}
</style>