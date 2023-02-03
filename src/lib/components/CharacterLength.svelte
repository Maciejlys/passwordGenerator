<script lang="ts">
	import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
	import Range from '$lib/components/Range.svelte';
	import { length } from '$lib/stores/options';
</script>

<div class="container">
	<div class="header">
		<p>Character Length</p>
		<AnimatedNumber value={$length} />
	</div>
	<Range bind:value={$length} min={1} max={20} />
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
