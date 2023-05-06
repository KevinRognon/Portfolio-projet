<template>
    <section>
        <article class="flex">
            <div id="title">
                <h3 class="article_title">
                    Projet: Curriculum Vitae
                </h3>
            </div>
            <div id="project">
                <img class="img_para" src="../assets/images/Image_CV.png" alt="Image projet de CV en HTML & CSS">
                <hr>
                <div id="para">
                    <p class="para_child">
                        Ce projet a pour but de créer un CV en HTML5 & CSS3.
                    </p>
                    <p class="para_child">
                        Langage utilisé: HTML5 & CSS3
                    </p>
                    <p class="para_child">
                        Logiciel utilisé: Visual Studio Code
                    </p>
                    <!-- Inclure un router link sur ce bouton! -->
                    <Bouton_Global class="para_child" />
            </div>
            </div>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue'
import { onMounted } from 'vue';
import gsap from 'gsap';

    onMounted(() => {
        gsap.fromTo('.article_title', {
            opacity: 0,
            y: '-100%'
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1
        })
        gsap.fromTo('.img_para', {
            opacity: 0,
            x: '-100%'
        }, {
            opacity: 1,
            x: 0,
            delay: 3,
            duration: 1
        });
        gsap.fromTo('hr', {
            opacity: 0,
            y: '-100%'
        }, {
            opacity: 0.4,
            y: 0,
            delay: 4,
            duration: 1
        });
        gsap.fromTo('.para_child', {
            opacity: 0,
            x: '100%',
        }, {
            opacity: 1,
            x: 0,
            delay: 2,
            duration: 1,
            stagger: 0.2
        });
        gsap.fromTo('.para_button', {
            opacity: 0,
            x: '+10%',
        }, {
            opacity: 1,
            x: 0,
            delay: 1,
            duration: 1.5
        })
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
        width: 350px;
        height: 400px;
        border: 3px solid black;
        box-shadow: 0 0 10px 1px white;
        border-radius: 20px;
    }
    hr{
        height: 200px;
        width: 1px;
        opacity: 0.4;
    }
    #para{
        display: flex;
        flex-direction: column;

        gap: 10px;
    }
}
</style>