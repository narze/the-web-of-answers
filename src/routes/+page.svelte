<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import entriesFile from '../entries.yaml';

	const entriesCount = entriesFile.entries.length;

	let longEnough = false;
	let openDialog = false;
	let timeout: NodeJS.Timeout;
	let dialog: HTMLDialogElement;
	let show = true;

	$: if (dialog) {
		if (openDialog) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}
	function handleClick() {
		if (!longEnough) {
			openDialog = true;
			return;
		}

		const id = 1 + Math.floor(Math.random() * entriesCount);

		show = false;

		setTimeout(() => {
			document.location.href = `/${id}`;
		}, 500);
	}

	onMount(() => {
		timeout = setTimeout(() => {
			longEnough = true;
		}, 5000);
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

{#if show}
	<main out:fade>
		<h1 class="title">เว็บนี้มีคำตอบ</h1>

		<h2><code>วิธีใช้</code></h2>

		<ol>
			<li>ตั้งคำถามแบบปลายปิดในใจ เช่น วันหยุดนี้ไปเที่ยวดีไหม หรือ เย็นนี้กินกะเพราดีหรือเปล่า</li>
			<li>รวบรวมสมาธิกับคำถาม 10-15 วินาที</li>
			<li>คลิกที่ปุ่มเพื่อรับคำตอบ</li>
		</ol>

		<button on:click={handleClick}>รับคำตอบ</button>

		<div class="sub">
			<center>
				<small
					>แรงบันดาลใจจาก <a
						href="https://www.amazon.co.uk/Book-Answers-Carol-Bolt/dp/0553813544"
						target="_blank">The Book of Answers - Carol Bolt</a
					></small
				>
				<br />
				<small
					>Contribute on <a href="https://github.com/narze/the-web-of-answers" target="_blank"
						>Github</a
					></small
				>
			</center>
		</div>

		<dialog bind:this={dialog}>
			<p>คุณยังคิดไม่นานพอ...</p>
			<form on:submit={() => (openDialog = false)}>
				<center><button>OK</button></center>
			</form>
		</dialog>
	</main>
{/if}
