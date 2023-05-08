<template>
    <section class="flex">
        <article class="flex">
            <p>
                Ecrivez-moi ici: 
            </p>
            <form @submit.prevent>
                <div>
                    <input placeholder="Prénom" type="text">
                    <input placeholder="Nom" type="text">
                    <input placeholder="Objet" type="text">
                </div>
                <textarea placeholder="Votre message.." cols="50" rows="10"></textarea>
                <Bouton_Global class="bouton_envoyer" text="Envoyer" />
            </form>
        </article>
    </section>
</template>
<script setup>
import Bouton_Global from './Bouton_Global.vue';


</script>
<style lang="scss" scoped>
    section{
        background-color: #5C3D3B;
    }
    textarea {
        padding: 20px;
        resize: none;
        border: 2px solid white;
        border-radius: 20px;
    }
    input{
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px 10px;
    }
    article {
        gap: 50px;

        p{
            font-size: 2em;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 20px;

            .bouton_envoyer{
                align-self: center;
            }
            div{
                display: flex;
                gap: 10px;
            }
        }
    }

</style>