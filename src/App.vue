<template>
  <Header-comp />
  <main>
    <Home />
    <BoutonRetourHaut />
    <CV class="observer" />
    <CDC />
    <Commentaires />
  </main>
  <footer>
  </footer>
</template>


<script setup>
  import HeaderComp from './components/Header-comp.vue';
  import Home from './components/Home-comp.vue';
  import CV from './components/CV.vue';
  import CDC from './components/CDC.vue';
  import Commentaires from './components/Commentaires-comp.vue';
  import BoutonRetourHaut from './components/BoutonRetourHaut.vue'


</script>
<style scoped>
</style>