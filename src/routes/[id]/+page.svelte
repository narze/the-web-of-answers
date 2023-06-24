<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function back() {
		document.location.href = `/`;
	}
</script>

<h1>{data.entry.content}</h1>

<button on:click={back}>กลับหน้าแรก</button>
