<script lang="ts">
	import Checbox from '$lib/components/Checbox.svelte';
	import { OptionType, type Option } from '$lib/types/options.type';
	import { options } from '$lib/stores/options';
</script>

<div class="contaner">
	{#each Object.values($options) as option}
		<Checbox label={option.label} bind:checked={option.value} />
	{/each}
</div>

<style>
	.contaner {
		margin-top: 1rem;
		display: grid;
		gap: 1rem;
	}
</style>
