<script lang="ts">
	import Checbox from '$lib/components/Checbox.svelte';
	import { options } from '$lib/stores/options';

	const handleChange = () => {
		options.update((options) => {
			return options;
		});
	};
</script>

<div class="contaner">
	{#each Object.values($options) as option}
		<Checbox label={option.label} bind:checked={option.value} on:change={handleChange} />
	{/each}
</div>

<style>
	.contaner {
		margin-top: 1rem;
		display: grid;
		gap: 1rem;
	}
</style>
