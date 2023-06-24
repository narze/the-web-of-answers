<script lang="ts">
	import { css, cva } from 'styled-system/css';
	import { container } from 'styled-system/patterns';
	import entriesJson from '../entries.json';

	const entriesCount = entriesJson.entries.length;

	function handleClick() {
		const id = 1 + Math.floor(Math.random() * entriesCount);
		document.location.href = `/${id}`;
	}

	const button = cva({
		base: {
			display: 'flex',
		},
		variants: {
			visual: {
				solid: { bg: 'red.200', color: 'white' },
				outline: { borderWidth: '1px', borderColor: 'red.200' },
			},
			size: {
				sm: { padding: '4', fontSize: '12px' },
				lg: { padding: '8', fontSize: '24px' },
			},
		},
	});
</script>

<main class={container({})}>
	<h1 class={css({ fontSize: '3xl' })}>เว็บนี้มีคำตอบ</h1>

	<h2 class={css({ fontSize: 'xl' })}>วิธีใช้</h2>

	<ol>
		<li>ตั้งคำถามแบบปลายปิดในใจ เช่น วันหยุดนี้ไปเที่ยวดีไหม หรือ เย็นนี้กินกะเพราดีหรือเปล่า</li>
		<li>รวบรวมสมาธิกับคำถาม 10-15 วินาที</li>
		<li>คลิกที่ปุ่มเพื่อรับคำตอบ</li>
	</ol>

	<button on:click={handleClick} class={button({ visual: 'solid', size: 'lg' })}>รับคำตอบ</button>
</main>
