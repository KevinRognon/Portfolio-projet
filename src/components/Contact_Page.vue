<template>
    <section class="flex">
        <article class="flex">
            <p>
                Ecrivez-moi ici: 
            </p>
            <form action="submit">
                <label>Nom:</label>
                <input type="text"> <br>
                <label>Prénom:</label>
                <input type="text"> <br>
                <textarea cols="50" rows="10"></textarea>
                <Bouton_Global text="Envoyer" />
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
    }
    article {
        gap: 50px;

        p{
            font-size: 2em;
        }
    }

</style>