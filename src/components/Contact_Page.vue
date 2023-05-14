<template>
    <section class="flex">
        <article class="flex">
            <p>
                Ecrivez-moi ici: 
            </p>
            <form action="https://formsubmit.co/fed027a94ca7a724f960f51a366e41a9" method="POST">
                <div>
                    <input name="firstname" placeholder="Prénom" type="text" required>
                    <input name="lastname" placeholder="Nom" type="text" required>
                    <input name="subject" placeholder="Objet" type="text" required>
                </div>
                <textarea name="message" placeholder="Votre message.." cols="50" rows="10" required></textarea>
                <Bouton_Global class="bouton_envoyer" type="submit" text="Envoyer" />
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