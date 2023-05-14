<template>
  <Header-comp />
  <main>
    <router-view></router-view>
    <Footer-comp />
  </main>
</template>


<script setup>
  import HeaderComp from './components/Header-comp.vue';
  import FooterComp from './components/Footer-comp.vue';


</script>
<style scoped>
</style>