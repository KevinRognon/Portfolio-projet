<template>
    <section id="curriculum" class="section-projets">
        <article class="flex article-color-second">
            <div id="project">
                <img class="img_para" src="../assets/images/Image_CV.png" alt="Image projet de CV en HTML & CSS">
                <hr class="hr_cv">
                <div id="para">
                    <h3 class="para_child">Projet: Curriculum Vitae</h3>
                    <p class="para_child">
                        Ce projet a pour but de créer un CV en HTML5 & CSS3.
                    </p>
                    <p class="para_child">
                        Langage utilisé: HTML5 & CSS3
                    </p>
                    <p class="para_child">
                        Logiciel utilisé: Visual Studio Code
                    </p>
                    <Bouton_Global @click="show = !show" text="Découvrir" class="para_child para_button" />
                    <Modal_CV titre="Curriculum Vitae" technos="HTML5 & CSS3" lien="http://kevinrognon.github.io/CV_CEF_TEST" creation="17-04-2023" :show="show"/>
                </div>
            </div>
        </article>
    </section>
</template>


<script setup>


import { onMounted } from 'vue';
import Bouton_Global from './Bouton_Global.vue';
import Modal_CV from './Modals/Modal_CV.vue';
import gsap from 'gsap';

defineProps({
    show: Boolean,
})

onMounted(() => {

    let img = gsap.to(
        '.img_para', {
                opacity: 1,
                x: 0
            });
    let hr = gsap.to(
        '.hr_cv', {
                opacity: 0.4,
                y: 0
            });
    let para = gsap.to(
        '.para_child', {
                opacity: 1,
                x: 0,
                stagger: 0.2
            });
    let section = document.querySelector('.para_button');
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
article{
    #project{
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
    .hr_cv{
        height: 200px;
        width: 1px;
        opacity: 0;
        transform: translateY(-100%);
    }
    #para{
        display: flex;
        flex-direction: column;

        gap: 10px;

    }
    .para_child{

        opacity: 0;
        transform: translateX(200px);
    }
}
</style>
