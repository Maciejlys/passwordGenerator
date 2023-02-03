<script lang="ts">
	import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
	import Range from '$lib/components/Range.svelte';
	import { lenght } from '$lib/stores/options';
</script>

<div class="container">
	<div class="header">
		<p>Character Length</p>
		<AnimatedNumber value={$lenght} />
	</div>
	<Range bind:value={$lenght} min={1} max={20} />
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
