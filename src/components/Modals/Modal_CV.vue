<template>
	<div class="bloc-modale" v-if="show">
		<div class="overlay" @click="show = !show"></div>

		<div class="modale">
			<button class="button-close" @click="show = !show">X</button>
			<h3>Titre du projet: {{ titre }}</h3>
			<p>Technologies utlisées: {{ technos }}</p>
			<p>Date de création: {{ creation }}</p>
			<a target="_blank" :href="lien"><Bouton_GlobalVue text="Voir"/></a>
		</div>
	</div>
</template>

<script setup>
import Bouton_GlobalVue from '../Bouton_Global.vue';




defineProps({
	titre: String,
	technos: String,
	lien: String,
	creation: String,
	show: Boolean,
})


</script>

<style lang="scss" scoped>

.bloc-modale {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.overlay{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.5;
	}
	.modale {
		position: relative;
		max-width: 50%;
		height: 30%;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;

		border-radius: 20px;
		box-shadow: 0 0 30px 0px rgb(255, 255, 255);
		.button-close {
			position: absolute;
			text-align: center;
			top: -20px;
			right: -20px;
			width: 35px;
			height: 35px;
			background-color: rgba(190, 0, 0, 1);
			color: rgb(0, 0, 0);
			font-size: 1.2rem;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			&:hover {
				background-color: rgba(255, 0, 0, 1);
			}
		}
		h3 {
			font-size: 1.5rem;
			color: black;
		}
		p {
			color: black;
		}
		button{
			color: rgb(0, 0, 0);
			border-color: rgb(0, 0, 0);
			&:hover {
				color: rgb(255, 255, 255);
				border-color: rgb(255, 255, 255);
				background-color: #000000;
			}
		}
	}
}

</style>
