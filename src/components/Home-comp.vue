<template>
    <section id="home">
        <article class="flex_home article-color-main">
            <img src="../assets/images/photo_kevin.jpg" alt="Image de Kevin">
            <div id="div_p">
                <p  class="article_p">
                    Bonjour et bienvenue sur mon portfolio ! Je m'appelle Kevin, j'ai 25 ans et je suis actuellement en formation de développeur Web & Web Mobile au Centre Européen de Formation. 
                </p>
                    
                <p  class="article_p">
                    Passionné par le monde de la programmation, je suis constamment en quête de nouveaux défis et projets à réaliser. J'ai une grande aisance avec les technologies du web, notamment avec les langages de programmation tels que HTML, CSS, JavaScript et Vue.js. 
                </p>
                
                <p  class="article_p">
                    J'ai également acquis des compétences en design, ce qui me permet de concevoir des interfaces intuitives et esthétiques. J'ai hâte de pouvoir mettre mes compétences en pratique et de relever de nouveaux défis dans le domaine du développement web. N'hésitez pas à naviguer sur l'onglet <strong>"Projects"</strong> pour découvrir mes réalisations et projets en cours !
                </p>
            </div>
        </article>
    </section>
</template>
<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap'

onMounted(() => {
    let article_img = document.querySelector('img');

    gsap.fromTo(article_img, {
        opacity: 0,
        x: '-100%',
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1
    });
    gsap.fromTo('.article_p', {
        opacity: 0,
        x: '100%',
        delay: 2
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 2,
        stagger: .5
    })
})
</script>
<style lang="scss" scoped>
#div_p{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

img{
    opacity: 0;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    box-shadow: 2px 5px 10px black;
}

p{
    font-weight: 300;
    width: 30rem;
    text-align: justify;
    line-height: 1.3;
}
</style>