<script lang="ts">
	import entriesJson from '../entries.json';

	const entriesCount = entriesJson.entries.length;

	function handleClick() {
		const id = 1 + Math.floor(Math.random() * entriesCount);
		document.location.href = `/${id}`;
	}
</script>

<h1>เว็บนี้มีคำตอบ</h1>

<h2>วิธีใช้</h2>

<ol>
	<li>ตั้งคำถามแบบปลายปิดในใจ เช่น วันหยุดนี้ไปเที่ยวดีไหม หรือ เย็นนี้กินกะเพราดีหรือเปล่า</li>
	<li>รวบรวมสมาธิกับคำถาม 10-15 วินาที</li>
	<li>คลิกที่ปุ่มเพื่อรับคำตอบ</li>
</ol>

<button on:click={handleClick}>รับคำตอบ</button>
