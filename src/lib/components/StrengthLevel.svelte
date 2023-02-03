<script lang="ts">
	import { fade } from 'svelte/transition';

	export let strength = 0;

	$: text =
		strength < 1
			? 'Very weak'
			: strength < 2
			? 'Weak'
			: strength < 3
			? 'Good'
			: strength < 4
			? 'Strong'
			: 'Very strong';
</script>

<div class="container">
	{#key text}
		<p in:fade>{text}</p>
	{/key}
	<div class="strength">
		{#each Array.from(Array(4)) as _, i}
			<div style="opacity: {i < strength ? 1 : 0.1}" />
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.strength {
		display: flex;
		justify-content: row-reverse;
		align-items: center;
		gap: 8px;
	}

	.strength > div {
		width: 20px;
		height: 30px;
		border: 1px solid #000;
		background-color: #fff;
	}

	.strength > div:nth-child(4) {
		background-color: #ff0000;
	}

	.strength > div:nth-child(3) {
		background-color: #ff8000;
	}

	.strength > div:nth-child(2) {
		background-color: #ffff00;
	}

	.strength > div:nth-child(1) {
		background-color: #00ff00;
	}
</style>
