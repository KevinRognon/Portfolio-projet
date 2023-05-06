<template>
    <section>
        <article class="flex">
            <img src="../assets/images/Image_CV.png" alt="Image projet de CV en HTML & CSS">
            <hr>
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
                <Bouton_Global class="para_child" />
            </div>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue'
import { onMounted } from 'vue';
import gsap from 'gsap';

    onMounted(() => {
        gsap.fromTo('.para_child', {
            opacity: 0,
            x: '100%',
        }, {
            opacity: 1,
            x: 0,
            delay: 1,
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
    img{
        width: 350px;
        height: 400px;
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