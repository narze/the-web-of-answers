<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	let loaded = false;

	function back() {
		goto('/');
	}

	onMount(async () => {
		// setTimeout(() => {
		loaded = true;
		// }, 100);
		// loaded = true;
	});
</script>

{#if loaded}
	<main in:fade>
		<h1 class="answer">{data.entry.content}</h1>

		<button on:click={back}>กลับหน้าแรก</button>
	</main>
{/if}
