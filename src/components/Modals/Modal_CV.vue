<template>
	<div class="bloc-modale" v-if="show">
		<div class="overlay"></div>

		<div class="modale">
			<button @click="show != show">X</button>
			<h3>{{ titre }}</h3>
			<p>Technologies utlisées: {{ technos }}</p>
			<a target="_blank" :href="lien">Voir le projet</a>
		</div>
	</div>
</template>

<script setup>


defineProps({
	titre: String,
	technos: String,
	lien: String,
	show: Boolean
})

</script>

<style scoped>



</style>
